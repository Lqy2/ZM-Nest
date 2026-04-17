import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateProductCategoryDto } from './dto/create-product-category.dto';
import { UpdateProductCategoryDto } from './dto/update-product-category.dto';
import { PrismaService } from '../prisma/prisma.service';
import type { NormalProductCategory } from '../generated/prisma';
import { FilterProductCategoryDto } from './dto/filter-category.dto';
import { Prisma } from '../generated/prisma/client';
import { ResponseHelper } from '../common/utils/response.helper';
import { PaginationDto } from '../common/dto/pagination.dto';

@Injectable()
export class ProductCategoryService {
  constructor(private readonly prismaService: PrismaService) {}

  // 创建商品分类
  create(createProductCategoryDto: CreateProductCategoryDto) {
    return this.prismaService.normalProductCategory.create({
      data: createProductCategoryDto,
    });
  }

  // 查询商品分类列表
  async findAll(filterProductCategoryDto: FilterProductCategoryDto) {
    const { name, isEnabled, current, pageSize, skip, take } = filterProductCategoryDto;
    // console.log(skip, take);
    // 构建查询条件
    const where: Prisma.NormalProductCategoryWhereInput = {};
    if (name) {
      where.name = {
        contains: name,
      };
    }
    if (isEnabled !== undefined ) {
      where.isEnabled = isEnabled === 'true';
    }

    const [list, total] = await Promise.all([
      this.prismaService.normalProductCategory.findMany({
        where,
        skip,
        take,
        orderBy: { createdAt: 'desc' },
      }),
      this.prismaService.normalProductCategory.count({ where }),
    ]);
    return ResponseHelper.buildListData(list, total, current!, pageSize!);
  }

  findOne(id: string): Promise<NormalProductCategory> {
    return this.prismaService.normalProductCategory.findUniqueOrThrow({
      where: { id },
    });
  }

  async update(
    id: string,
    updateProductCategoryDto: UpdateProductCategoryDto,
  ) {
    await this.prismaService.normalProductCategory.update({
      where: { id },
      data: updateProductCategoryDto,
    });
  }

  remove(id: string) {
    return this.prismaService.normalProductCategory.delete({
      where: { id },
    });
  }

  findSearchCategory(name: string): Promise<NormalProductCategory[]> {
    const keyword = name?.trim();
    if (!keyword) {
      throw new BadRequestException('请输入分类名称');
    }
    return this.prismaService.normalProductCategory.findMany({
      where: {
        name: {
          contains: keyword,
        },
      },
    });
  }
}
