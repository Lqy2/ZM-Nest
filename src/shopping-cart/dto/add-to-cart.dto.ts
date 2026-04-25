import { IsNumber, IsNotEmpty, IsOptional } from 'class-validator';

export class AddToCartDto {
  @IsNumber()
  @IsNotEmpty()
  productId: number;
  @IsNumber()
  @IsOptional()
  quantity?: number;
}
