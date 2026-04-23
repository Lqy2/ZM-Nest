import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ProductCategoryService } from './product-category.service';
import { CreateProductCategoryDto } from './dto/create-product-category.dto';
import { UpdateProductCategoryDto } from './dto/update-product-category.dto';
import type { ProductCategory } from '../generated/prisma';
import { Public } from '../auth/public.decorator';
import { FilterProductCategoryDto } from './dto/filter-category.dto';

@Controller('product-category')
export class ProductCategoryController {
  constructor(
    private readonly productCategoryService: ProductCategoryService,
  ) {}

  // 添加商品分类
  @Post('add-category')
  create(@Body() createProductCategoryDto: CreateProductCategoryDto) {
    return this.productCategoryService.create(createProductCategoryDto);
  }

  // 获取商品分类列表
  @Get()
  @Public()
  findAll(@Query() filterProductCategoryDto: FilterProductCategoryDto) {
    return this.productCategoryService.findAll(filterProductCategoryDto);
  }



  @Get(':id')
  @Public()
  findOne(@Param('id') id: string) {
    return this.productCategoryService.findOne(+id);
  }

  // 更新商品分类
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProductCategoryDto: UpdateProductCategoryDto,
  ) {
    return this.productCategoryService.update(+id, updateProductCategoryDto);
  }

  // 删除商品分类
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productCategoryService.remove(+id);
  }
}
