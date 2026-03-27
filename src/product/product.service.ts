import { Injectable } from '@nestjs/common';
// import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
// import { NormalProduct } from '@prisma/client';
import { NormalProduct } from '../generated/prisma';
import { PrismaService } from '../prisma/prisma.service';
@Injectable()
export class ProductService {
  // 注入 Prisma 服务
  constructor(private readonly prismaService: PrismaService) {}

  findAll(): Promise<NormalProduct[]> {
    return this.prismaService.normalProduct.findMany();
  }

  findOne(id: number): Promise<NormalProduct> {
    return this.prismaService.normalProduct.findUniqueOrThrow({
      where: { id: String(id) },
    });
  }

  update(
    id: number,
    updateProductDto: UpdateProductDto,
  ): Promise<NormalProduct> {
    return this.prismaService.normalProduct.update({
      where: { id: String(id) },
      data: updateProductDto,
    });
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
