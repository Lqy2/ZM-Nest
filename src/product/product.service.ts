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
    const { galleryImages, detailImages, categoryId, courseDetail } =
      createProductDto;

    // 判断新增商品是否为课程类型
    // const ItemType = await this.prismaService.productCategory.findUnique({
    //   where: {
    //     id: categoryId,
    //   },
    //   select: {
    //     itemType: true,
    //   },
    // });

    const ItemType = await this.getProductType(categoryId);
    console.log('添加商品类型:', ItemType);
    const data: Prisma.ProductCreateInput = {
      name: createProductDto.name,
      description: createProductDto.description,
      category: { connect: { id: categoryId } },
      price: createProductDto.price,
      discountPrice: createProductDto.discountPrice,
      stock: ItemType?.itemType === 'COURSE' ? 1 : createProductDto.stock, //未限制库存？类型为课程限制为最大1
    };

    if (detailImages) {
      data.detailImages = {
        connectOrCreate: detailImages.map((file) => ({
          where: { fileKey: file.fileKey },
          create: file,
        })),
      };
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
    // console.log(where);
    const [list, total] = await Promise.all([
      this.prismaService.product.findMany({
        where,
        skip,
        take,
        include: {
          category: true,
          galleryImages: true,
          detailImages: true,
          courseDetail: {
            include: {
              coverImage: true,
              video: true,
            },
          },
        },
        orderBy: { createdAt: 'desc' },
      }),
      this.prismaService.product.count({ where }),
    ]);

    const processedList = list.map((item) => ({
      ...item, // 保留原有的所有属性
      galleryImages: (item.galleryImages || []).map((file) => ({
        downloadUrl: this.uploadService.getSignedUrl(file.fileKey),
      })),
      detailImages:
        (item.detailImages || []).map((file) => ({
          downloadUrl: this.uploadService.getSignedUrl(file.fileKey),
        })),
      // 课程封面图
      coverImage: item.courseDetail?.coverImage
        ? { downloadUrl: this.uploadService.getSignedUrl(item.courseDetail.coverImage.fileKey) }
        : null,
      // 课程视频
      video: item.courseDetail?.video
        ? { downloadUrl: this.uploadService.getSignedUrl(item.courseDetail.video.fileKey) }
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
        detailImages: true,
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
        detailImages: true,
        courseDetail: {
          include: {
            coverImage: true,
            video: true,
          },
        },
      },
    });
    if (!product) {
      throw new NotFoundException('商品不存在');
    }
    // 检查商品类型
    const ItemType = await this.getProductType(product.categoryId);
    console.log('商品类型:', updateProductDto);

    const { galleryImages, detailImages, categoryId, courseDetail } = updateProductDto;

    const data: Prisma.ProductUpdateInput = {};
    
    // 只在用户明确提交时才更新字段
    if (updateProductDto.name !== undefined) {
      data.name = updateProductDto.name;
    }
    if (updateProductDto.description !== undefined) {
      data.description = updateProductDto.description;
    }
    if (categoryId !== undefined) {
      data.category = { connect: { id: categoryId } };
    }
    if (updateProductDto.price !== undefined) {
      data.price = updateProductDto.price;
    }
    if (updateProductDto.discountPrice !== undefined) {
      data.discountPrice = updateProductDto.discountPrice;
    }
    if (updateProductDto.stock !== undefined) {
      data.stock = ItemType?.itemType === 'COURSE' ? 1 : updateProductDto.stock;
    }

    if (ItemType?.itemType === 'COURSE') {
      // ========== 课程类商品 ==========
      // 更新课程详情（封面图和视频）
      if (courseDetail) {
        // 删除旧的课程详情关联
        if (product.courseDetail) {
          await this.prismaService.course.delete({
            where: { id: product.courseDetail.id },
          });
        }

        // 创建新的课程详情
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

      // 课程商品不需要 galleryImages 和 detailImages，清空它们
      // 只在用户明确提交了这些字段时才清空
      if (galleryImages !== undefined) {
        // 从 product.galleryImages 获取当前关联的图片来断开
        if (product.galleryImages && product.galleryImages.length > 0) {
          data.galleryImages = {
            disconnect: product.galleryImages.map((img) => ({ id: img.id })),
          };
        }
      }
      if (detailImages !== undefined) {
        // 从 product.detailImages 获取当前关联的图片来断开
        if (product.detailImages && product.detailImages.length > 0) {
          data.detailImages = {
            disconnect: product.detailImages.map((img) => ({ id: img.id })),
          };
        }
      }
    } else {
      // ========== 普通商品 ==========
      // 更新主图集
      // ✅ 修复：从 product.galleryImages 获取旧图片来断开
      if (galleryImages !== undefined) {
        const oldImageIds = (product.galleryImages || []).map((img) => ({
          id: img.id,
        }));

        data.galleryImages = {
          disconnect: oldImageIds,
          ...(galleryImages.length > 0
            ? {
              connectOrCreate: galleryImages.map((file) => ({
                where: { fileKey: file.fileKey },
                create: file,
              })),
            }
            : {}),
        };
      }

      // 更新详情图集
      // ✅ 修复：从 product.detailImages 获取旧图片来断开
      if (detailImages !== undefined) {
        const oldDetailIds = (product.detailImages || []).map((img) => ({
          id: img.id,
        }));

        data.detailImages = {
          disconnect: oldDetailIds,
          ...(detailImages.length > 0
            ? {
              connectOrCreate: detailImages.map((file) => ({
                where: { fileKey: file.fileKey },
                create: file,
              })),
            }
            : {}),
        };
      }

      // 普通商品清空课程详情
      if (product.courseDetail) {
        await this.prismaService.course.delete({
          where: { id: product.courseDetail.id },
        });
        data.courseDetail = { disconnect: true };
      }
    }

    return this.prismaService.product.update({
      where: { id: id },
      data,
      include: {
        category: true,
        galleryImages: true,
        detailImages: true,
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

  // 获取商品类型
  getProductType(id: number) {
    return this.prismaService.productCategory.findUnique({
      where: { id: id },
      select: { itemType: true },
    });
  }
}
