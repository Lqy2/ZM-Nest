import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
// import { NormalProduct } from '@prisma/client';
import type { NormalProduct } from '../generated/prisma';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '../generated/prisma/client';

@Injectable()
export class ProductService {
  // 注入 Prisma 服务
  constructor(private readonly prismaService: PrismaService) {}

  create(createProductDto: CreateProductDto) {
    console.log(createProductDto);
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
  findAll(): Promise<NormalProduct[]> {
    return this.prismaService.normalProduct.findMany({
      include: {
        category: true,
      },
    });
  }

  findOne(id: number): Promise<NormalProduct> {
    return this.prismaService.normalProduct.findUniqueOrThrow({
      where: { id: String(id) },
      include: {
        category: true,
      },
    });
  }

  update(
    id: number,
    updateProductDto: UpdateProductDto,
  ): Promise<NormalProduct> {
    const { galleryImages, detailImage, categoryId, ...data } =
      updateProductDto;
    return this.prismaService.normalProduct.update({
      where: { id: String(id) },
      data: {
        ...data,
        galleryImages: galleryImages
          ? { set: galleryImages.map((id) => ({ id: Number(id) })) }
          : undefined,
        detailImage: detailImage
          ? { connect: { id: Number(detailImage.id) } }
          : undefined,
        category: categoryId ? { connect: { id: categoryId } } : undefined,
      },
      include: {
        category: true,
      },
    });
  }

  remove(id: number) {
    return this.prismaService.normalProduct.delete({
      where: { id: String(id) },
    });
  }
}
