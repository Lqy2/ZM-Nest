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
import type { NormalProductCategory } from '../generated/prisma';
import { Public } from '../auth/public.decorator';

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

  @Get()
  @Public()
  findAll() {
    return this.productCategoryService.findAll();
  }

  // 搜索商品分类
  @Get('search-category')
  @Public()
  findAllCategory(
    @Query('name') name: string,
  ): Promise<NormalProductCategory[]> {
    return this.productCategoryService.findSearchCategory(name);
  }

  @Get(':id')
  @Public()
  findOne(@Param('id') id: string) {
    return this.productCategoryService.findOne(id);
  }

  // 更新商品分类
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProductCategoryDto: UpdateProductCategoryDto,
  ) {
    return this.productCategoryService.update(id, updateProductCategoryDto);
  }

  // 删除商品分类
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productCategoryService.remove(id);
  }
}
