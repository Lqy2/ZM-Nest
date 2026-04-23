import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateProductCategoryDto } from './dto/create-product-category.dto';
import { UpdateProductCategoryDto } from './dto/update-product-category.dto';
import { PrismaService } from '../prisma/prisma.service';
import type { ProductCategory } from '../generated/prisma';
import { FilterProductCategoryDto } from './dto/filter-category.dto';
import { Prisma } from '../generated/prisma/client';
import { ResponseHelper } from '../common/utils/response.helper';
import { PaginationDto } from '../common/dto/pagination.dto';

@Injectable()
export class ProductCategoryService {
  constructor(private readonly prismaService: PrismaService) {}

  // 创建商品分类
  create(createProductCategoryDto: CreateProductCategoryDto) {
    return this.prismaService.productCategory.create({
      data: createProductCategoryDto,
    });
  }

  // 查询商品分类列表
  async findAll(filterProductCategoryDto: FilterProductCategoryDto) {
    const { name, isEnabled, itemType, current, pageSize, skip, take } =
      filterProductCategoryDto;
    // console.log(skip, take);
    // 构建查询条件
    const where: Prisma.ProductCategoryWhereInput = {};
    if (name) {
      where.name = {
        contains: name,
      };
    }

    //
    if (isEnabled !== undefined) {
      where.isEnabled = isEnabled === 'true';
    }

    // 分类类型PRODUCT||COURSE
    if (itemType !== undefined) {
      where.itemType = itemType;
    }

    const [list, total] = await Promise.all([
      this.prismaService.productCategory.findMany({
        where,
        skip,
        take,
        orderBy: { createdAt: 'desc' },
      }),
      this.prismaService.productCategory.count({ where }),
    ]);
    return ResponseHelper.buildListData(list, total, current!, pageSize!);
  }

  findOne(id: number): Promise<ProductCategory> {
    return this.prismaService.productCategory.findUniqueOrThrow({
      where: { id },
    });
  }

  async update(id: number, updateProductCategoryDto: UpdateProductCategoryDto) {
    await this.prismaService.productCategory.update({
      where: { id },
      data: updateProductCategoryDto,
    });
  }

  remove(id: number) {
    return this.prismaService.productCategory.delete({
      where: { id },
    });
  }

  
}
