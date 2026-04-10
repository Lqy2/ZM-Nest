import { IsNotEmpty, IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateProductDto {
  // 商品名称
  @IsString()
  @IsNotEmpty({ message: '商品名称不能为空' })
  name: string;
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
  imageUrl?: string;
  galleryImages?: string[];
  detailImages?: string[];
  // 商品类目ID
  @IsString()
  @IsNotEmpty({ message: '商品类目ID不能为空' })
  categoryId: string;
}
