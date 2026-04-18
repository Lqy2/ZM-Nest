import { IsNotEmpty, IsString, IsNumber, IsOptional, IsArray } from 'class-validator';
import { FileDto } from '../../upload/dto/file.dto';

export class CreateProductDto {
  // 商品名称
  @IsString()
  @IsNotEmpty({ message: '商品名称不能为空' })
  name: string;
  // 商品描述
  @IsString()
  description?: string;
  // 商品价格
  @IsNotEmpty()
  @IsNumber()
  @IsNotEmpty({ message: '商品价格不能为空' })
  price: number;
  // 商品优惠价
  @IsOptional()
  @IsNumber()
  @IsNotEmpty({ message: '商品优惠价不能为空' })
  discountPrice?: number;
  // 商品库存
  @IsNotEmpty()
  @IsNumber()
  @IsNotEmpty({ message: '商品库存不能为空' })
  stock: number;

  // 商品图集（列表页/轮播）
  @IsArray()
  @IsNotEmpty({ message: '商品图集不能为空' })
  galleryImages: FileDto[];
  // 商品详情图ID
  // @IsNumber()
  // detailImageId?: number;
  @IsNotEmpty({ message: '商品详情图不能为空' })
  detailImage: FileDto;
  // 商品类目ID
  @IsString()
  @IsNotEmpty({ message: '商品类目ID不能为空' })
  categoryId: string;
}
