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
import { log } from 'console';

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

    const ItemType = await this.getProductType(categoryId);
    console.log('添加商品类型:', ItemType);
    const data: Prisma.ProductCreateInput = {
      name: createProductDto.name,
      description: createProductDto.description,
      category: { connect: { id: categoryId } },
      price: createProductDto.price,
      isPublished: createProductDto.isPublished,
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
    const { name, id, categoryId, current, pageSize, skip, take, itemType, isPublished } =
      filterProductDto;
    console.log('查询参数:', filterProductDto);
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
    // 分类查询
    if (categoryId) {
      where.categoryId = {
        equals: Number(categoryId),
      };
    }
    // 发布状态查询
    if (isPublished !== undefined) {
      where.isPublished = {
        equals: isPublished === 'true',
      };
    }

    // 商品类型查询
    if (itemType) {
      where.category = {
        itemType: {
          equals: itemType,
        },
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
        ...file,
        downloadUrl: this.uploadService.getSignedUrl(file.fileKey),
      })),
      detailImages: (item.detailImages || []).map((file) => ({
        ...file,
        downloadUrl: this.uploadService.getSignedUrl(file.fileKey),
      })),
      // 课程封面图
      coverImage: item.courseDetail?.coverImage
        ? {
          downloadUrl: this.uploadService.getSignedUrl(
            item.courseDetail.coverImage.fileKey,
          ),
        }
        : null,
      // 课程视频
      video: item.courseDetail?.video
        ? {
          downloadUrl: this.uploadService.getSignedUrl(
            item.courseDetail.video.fileKey,
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

  async findOne(id: number) {
    const product = await this.prismaService.product.findUnique({
      where: { id },
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
    });
    if (!product) {
      throw new NotFoundException('商品不存在');
    }
    const processedList = {
      ...product,
      galleryImages: (product.galleryImages || []).map((file) => ({
        ...file,
        downloadUrl: this.uploadService.getSignedUrl(file.fileKey),
      })),
      detailImages: (product.detailImages || []).map((file) => ({
        ...file,
        downloadUrl: this.uploadService.getSignedUrl(file.fileKey),
      })),
      // 课程封面图
      coverImage: product.courseDetail?.coverImage
        ? {
          downloadUrl: this.uploadService.getSignedUrl(
            product.courseDetail.coverImage.fileKey,
          ),
        }
        : null,
      // 课程视频
      video: product.courseDetail?.video
        ? {
          downloadUrl: this.uploadService.getSignedUrl(
            product.courseDetail.video.fileKey,
          ),
        }
        : null,
    }

    return processedList;
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

    const { galleryImages, detailImages, categoryId, courseDetail } =
      updateProductDto;

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
    if (updateProductDto.isPublished !== undefined) {
      data.isPublished = updateProductDto.isPublished;
    }

    if (ItemType?.itemType === 'COURSE') {
      // ========== 课程类商品 ==========
      // 更新课程详情（增量更新模式：只修改用户改动的字段）
      if (courseDetail) {
        const courseData: Prisma.CourseUpdateInput = {};

        if (courseDetail.type !== undefined) {
          courseData.type = courseDetail.type;
        }
        if (courseDetail.previewDuration !== undefined) {
          courseData.previewDuration = courseDetail.previewDuration;
        }

        if (courseDetail.coverImage != null) {
          courseData.coverImage = courseDetail.coverImage.id
            ? { connect: { id: courseDetail.coverImage.id } }
            : { create: courseDetail.coverImage };
        }

        if (courseDetail.video != null) {
          courseData.video = courseDetail.video.id
            ? { connect: { id: courseDetail.video.id } }
            : { create: courseDetail.video };
        }

        data.courseDetail = {
          update: courseData,
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
      // 更新主图集（叠加模式：只加不减）
      // ✅ 只添加新图片，原有图片永远保留，删图需要单独操作
      if (galleryImages !== undefined && galleryImages.length > 0) {
        const oldFileKeys = new Set(
          (product.galleryImages || []).map((img) => img.fileKey),
        );

        const needAdd = galleryImages.filter(
          (newImg) => !oldFileKeys.has(newImg.fileKey),
        );

        if (needAdd.length > 0) {
          data.galleryImages = {
            connectOrCreate: needAdd.map((file) => ({
              where: { fileKey: file.fileKey },
              create: file,
            })),
          };
        }
      }

      // 更新详情图集（叠加模式：只加不减）
      // ✅ 只添加新图片，原有图片永远保留，删图需要单独操作
      if (detailImages !== undefined && detailImages.length > 0) {
        const oldFileKeys = new Set(
          (product.detailImages || []).map((img) => img.fileKey),
        );

        const needAdd = detailImages.filter(
          (newImg) => !oldFileKeys.has(newImg.fileKey),
        );

        if (needAdd.length > 0) {
          data.detailImages = {
            connectOrCreate: needAdd.map((file) => ({
              where: { fileKey: file.fileKey },
              create: file,
            })),
          };
        }
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
    const product = await this.prismaService.product.findUnique({
      where: { id },
      include: {
        galleryImages: true,
        detailImages: true,
        courseDetail: true,
      },
    });

    if (!product) {
      throw new NotFoundException(`商品不存在或已删除`);
    }

    // 2. 记录删除前的信息（用于审计）
    // console.log(`用户 ${userId} 删除商品 ${id} - ${product.name}`);

    // 3. 开始事务
    return this.prismaService.$transaction(async (prisma) => {
      // 3.1 删除关联的课程详情
      if (product.courseDetail) {
        await prisma.course.delete({
          where: { id: product.courseDetail.id },
        });
      }

      // 3.2 断开图片关联（如果需要）
      // 注意：这里可能需要根据实际业务逻辑决定是否删除图片文件

      // 3.3 删除商品
      return prisma.product.delete({
        where: { id },
      });
    });
  }

  // 删除主图集中的单张图片
  async removeGalleryImage(productId: number, imageId: number) {
    const product = await this.prismaService.product.findUnique({
      where: { id: productId },
      select: { id: true },
    });

    if (!product) {
      throw new NotFoundException('商品不存在');
    }

    return this.prismaService.product.update({
      where: { id: productId },
      data: {
        galleryImages: {
          disconnect: { id: imageId },
        },
      },
    });
  }

  // 删除详情图集中的单张图片
  async removeDetailImage(productId: number, imageId: number) {
    const product = await this.prismaService.product.findUnique({
      where: { id: productId },
      select: { id: true },
    });

    if (!product) {
      throw new NotFoundException('商品不存在');
    }

    return this.prismaService.product.update({
      where: { id: productId },
      data: {
        detailImages: {
          disconnect: { id: imageId },
        },
      },
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
