import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
// import { NormalProduct } from '@prisma/client';
import type { NormalProduct } from '../generated/prisma';
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
  ) {}

  create(createProductDto: CreateProductDto) {
    // console.log(createProductDto);
    // const { galleryImages, detailImage, categoryId, ...data } =
    //   createProductDto;
    // return this.prismaService.normalProduct.create({
    //   data: {
    //     ...data,
    //     galleryImages: {
    //       connect:
    //         galleryImages?.map((file) => ({ id: file.id })) || [],
    //     },
    //     detailImage: {
    //       connect: detailImage ? { id: detailImage.id } : undefined,
    //     },
    //     category: {
    //       connect: { id: categoryId },
    //     },
    //   },
    // });

    const { galleryImages, detailImage, categoryId } = createProductDto;

    const data: Prisma.NormalProductCreateInput = {
      name: createProductDto.name,
      description: createProductDto.description,
      category: { connect: { id: categoryId } },
      price: createProductDto.price,
      discountPrice: createProductDto.discountPrice,
      stock: createProductDto.stock,
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
    return this.prismaService.normalProduct.create({
      data,
    });
  }

  // 查询所有产品
  async findAll(filterProductDto: FilterProductDto) {
    const { name, categoryId, current, pageSize, skip, take } =
      filterProductDto;

    const where: Prisma.NormalProductWhereInput = {};
    if (name) {
      where.name = {
        contains: name, //模糊查询
      };
    }
    if (categoryId) {
      where.categoryId = {
        equals: categoryId,
      };
    }

    const [list, total] = await Promise.all([
      this.prismaService.normalProduct.findMany({
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
      this.prismaService.normalProduct.count({ where }),
    ]);

    const processedList = list.map((item) => ({
      ...item, // 保留原有的所有属性
      // 👇 覆盖 galleryImages，TS 不会报错
      galleryImages:
        item.galleryImages?.map((file) => ({
          // 也可以保留一些原有字段 + 新增 downloadUrl
          downloadUrl: this.uploadService.getSignedUrl(file.fileKey),
        })) || [],
      // 详情图也一样处理
      detailImage: item.detailImage
        ? {
            downloadUrl: this.uploadService.getSignedUrl(
              item.detailImage.fileKey,
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

  findOne(id: number): Promise<NormalProduct> {
    return this.prismaService.normalProduct.findUniqueOrThrow({
      where: { id: String(id) },
      include: {
        category: true,
      },
    });
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const product = await this.prismaService.normalProduct.findUnique({
      where: {
        id,
      },
    });
    if (!product) {
      throw new Error('商品不存在');
    }

    const { galleryImages, detailImage, categoryId } = updateProductDto;
    // return this.prismaService.normalProduct.update({
    //   where: { id: String(id) },
    //   data: {
    //     ...data,
    //     galleryImages: galleryImages
    //       ? { set: galleryImages.map((id) => ({ id: Number(id) })) }
    //       : undefined,
    //     detailImage: detailImage
    //       ? { connect: { id: Number(detailImage.id) } }
    //       : undefined,
    //     category: categoryId ? { connect: { id: categoryId } } : undefined,
    //   },
    //   include: {
    //     category: true,
    //   },
    // });

    const data: Prisma.NormalProductUpdateInput = {
      name: updateProductDto.name,
      description: updateProductDto.description,
      category: { connect: { id: categoryId } },
      price: updateProductDto.price,
      discountPrice: updateProductDto.discountPrice,
      stock: updateProductDto.stock,
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
    return this.prismaService.normalProduct.update({
      where: { id },
      data,
    });
  }

  async remove(id: string) {
    // 1. 先检查是否存在
    const exists = await this.prismaService.normalProduct.findUnique({
      where: { id },
      select: { id: true },
    });

    if (!exists) {
      throw new NotFoundException(`商品不存在或已删除`);
    }

    // 2. 存在才删除
    return this.prismaService.normalProduct.delete({
      where: { id },
    });
  }
}
