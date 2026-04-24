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
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Public } from '../auth/public.decorator';
import { FilterProductDto } from './dto/filter-product.dto';

// @Public()
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post('add-product')
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Public()
  @Get('filter')
  findAll(@Query() filterProductDto: FilterProductDto) {
    return this.productService.findAll(filterProductDto);
  }

  @Get(':id')
  @Public()
  findOne(@Param('id') id: number) {
    return this.productService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.productService.remove(id);
  }

  // 删除主图集中的单张图片
  @Delete(':id/gallery-images/:imageId')
  removeGalleryImage(
    @Param('id') productId: number,
    @Param('imageId') imageId: number,
  ) {
    return this.productService.removeGalleryImage(productId, imageId);
  }

  // 删除详情图集中的单张图片
  @Delete(':id/detail-images/:imageId')
  removeDetailImage(
    @Param('id') productId: number,
    @Param('imageId') imageId: number,
  ) {
    return this.productService.removeDetailImage(productId, imageId);
  }
}
