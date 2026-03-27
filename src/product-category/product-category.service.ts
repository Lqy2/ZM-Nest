import { Injectable } from '@nestjs/common';
import { CreateProductCategoryDto } from './dto/create-product-category.dto';
import { UpdateProductCategoryDto } from './dto/update-product-category.dto';
import { PrismaService } from '../prisma/prisma.service';
import { NormalProductCategory } from '../generated/prisma';

@Injectable()
export class ProductCategoryService {
  constructor(private readonly prismaService: PrismaService) {}

  create(
    createProductCategoryDto: CreateProductCategoryDto,
  ): Promise<NormalProductCategory> {
    return this.prismaService.normalProductCategory.create({
      data: createProductCategoryDto,
    });
  }

  findAll(): Promise<NormalProductCategory[]> {
    return this.prismaService.normalProductCategory.findMany();
  }

  findOne(id: string): Promise<NormalProductCategory> {
    return this.prismaService.normalProductCategory.findUniqueOrThrow({
      where: { id },
    });
  }

  update(
    id: string,
    updateProductCategoryDto: UpdateProductCategoryDto,
  ): Promise<NormalProductCategory> {
    return this.prismaService.normalProductCategory.update({
      where: { id },
      data: updateProductCategoryDto,
    });
  }

  remove(id: string): Promise<NormalProductCategory> {
    return this.prismaService.normalProductCategory.delete({
      where: { id },
    });
  }
}
