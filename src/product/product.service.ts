import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
// import { NormalProduct } from '@prisma/client';
// import type { Product } from '../generated/prisma';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '../generated/prisma/client';
import { ResponseHelper } from '../common/utils/response.helper';
import { FilterProductDto } from './dto/filter-product.dto';

import { UploadService } from '../upload/upload.service';

@Injectable()
export class ProductService {
  // 注入 Prisma 服务
  constructor(
    private readonly prismaService: PrismaService,
    private readonly uploadService: UploadService,
  ) { }

  async create(createProductDto: CreateProductDto) {
    // const type = this.prismaService.product.findUnique({
    //   where: {
    //     name: createProductDto.name,
    //   },
    // })





    const { galleryImages, detailImage, categoryId, courseDetail } = createProductDto;

    // 判断新增商品是否为课程类型
    const ItemType = await this.prismaService.productCategory.findUnique({
      where: {
        id: categoryId,
      },
      select: {
        itemType: true,
      },
    });
   

    const data: Prisma.ProductCreateInput = {
      name: createProductDto.name,
      description: createProductDto.description,
      category: { connect: { id: categoryId } },
      price: createProductDto.price,
      discountPrice: createProductDto.discountPrice,
      stock: ItemType?.itemType === 'COURSE' ? 1 : createProductDto.stock,//未限制库存？类型为课程限制为最大1
    };

    if (detailImage) {
      data.detailImage = detailImage.id
        ? { connect: { id: detailImage.id } }
        : { create: detailImage };
    }
    if (galleryImages) {
      data.galleryImages = {
        connectOrCreate: galleryImages.map((file) => ({
          where: { fileKey: file.fileKey },
          create: file,
        })),
      };
    }

    if (courseDetail) {
      data.courseDetail = {
        create: {
          type: courseDetail.type,
          coverImage: courseDetail.coverImage.id
            ? { connect: { id: courseDetail.coverImage.id } }
            : { create: courseDetail.coverImage },
          video: courseDetail.video.id
            ? { connect: { id: courseDetail.video.id } }
            : { create: courseDetail.video },
          previewDuration: courseDetail.previewDuration,
        },
      };
    }

    return this.prismaService.product.create({
      data,
      include: {
        courseDetail: true,
      },
    });
  }

  // 查询所有产品
  async findAll(filterProductDto: FilterProductDto) {
    const { name, id, categoryId, current, pageSize, skip, take } =
      filterProductDto;

    const where: Prisma.ProductWhereInput = {};
    if (name) {
      where.name = {
        contains: name, //模糊查询
      };
    }
    if (id) {
      where.id = {
        equals: id,
      };
    }
    if (categoryId) {
      where.categoryId = {
        equals: categoryId,
      };
    }
    console.log(where);
    const [list, total] = await Promise.all([
      this.prismaService.product.findMany({
        where,
        skip,
        take,
        include: {
          category: true,
          galleryImages: true,
          detailImage: true,
        },
        orderBy: { createdAt: 'desc' },
      }),
      this.prismaService.product.count({ where }),
    ]);

    const processedList = list.map((item) => ({
      ...item, // 保留原有的所有属性
      // 👇 覆盖 galleryImages，TS 不会报错
      galleryImages:
        (item.galleryImages || []).map((file) => ({
          // 也可以保留一些原有字段 + 新增 downloadUrl
          downloadUrl: this.uploadService.getSignedUrl(file.fileKey),
        })),
      // 详情图也一样处理
      detailImage: (item.detailImage && item.detailImage.length > 0)
        ? {
          downloadUrl: this.uploadService.getSignedUrl(
            item.detailImage[0].fileKey,
          ),
        }
        : null,
    }));
    // console.log(processedList);
    return ResponseHelper.buildListData(
      processedList,
      total,
      current!,
      pageSize!,
    );
  }

  findOne(id: number) {
    return this.prismaService.product.findUnique({
      where: { id },
      include: {
        category: true,
        galleryImages: true,
        detailImage: true,
      },
    });
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const product = await this.prismaService.product.findUnique({
      where: {
        id: id,
      },
      include: {
        galleryImages: true,
      },
    });
    if (!product) {
      throw new Error('商品不存在');
    }

    const { galleryImages, detailImage, categoryId } = updateProductDto;

    const data: Prisma.ProductUpdateInput = {
      name: updateProductDto.name,
      description: updateProductDto.description,
      category: { connect: { id: categoryId } },
      price: updateProductDto.price,
      discountPrice: updateProductDto.discountPrice,
      stock: updateProductDto.stock,
    };

    // if (detailImage !== undefined) {
    //   if (detailImage === null) {
    //     data.detailImage = { disconnect: true };
    //   } else {
    //     if (detailImage.id) {
    //       data.detailImage = { connect: { id: detailImage.id } };
    //     } else {
    //       data.detailImage = { create: detailImage };
    //     }
    //   }
    // }
    if (detailImage) {
      data.detailImage = detailImage.id
        ? { connect: { id: detailImage.id } }
        : { create: detailImage };
    }

    if (galleryImages !== undefined) {
      const oldImageIds = (product.galleryImages || []).map(img => ({ id: img.id }));

      data.galleryImages = {
        disconnect: oldImageIds,
        connectOrCreate: galleryImages.map((file) => ({
          where: { fileKey: file.fileKey },
          create: file,
        })),
      };
    }

    return this.prismaService.product.update({
      where: { id: id },
      data,
      include: {
        category: true,
        galleryImages: true,
        detailImage: true,
      },
    });
  }

  async remove(id: number) {
    // 1. 先检查是否存在
    const exists = await this.prismaService.product.findUnique({
      where: { id: id },
      select: { id: true },
    });

    if (!exists) {
      throw new NotFoundException(`商品不存在或已删除`);
    }

    // 2. 存在才删除
    return this.prismaService.product.delete({
      where: { id: id },
    });
  }
}
