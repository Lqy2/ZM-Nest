import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsBooleanString,
  ValidateNested,
} from 'class-validator';
import { PaginationDto } from '../../common/dto/pagination.dto';
import { CreateProductCategoryDto } from '../../product-category/dto/create-product-category.dto';
import { ItemType } from '@/generated/prisma'; 


export class FilterProductDto extends PaginationDto {
  @IsOptional()
  @IsString()
  id?: number;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  categoryId?: number;

  @IsOptional()
  @IsBooleanString()
  isPublished?: string;

  @IsOptional()
  category?: CreateProductCategoryDto;


   @IsOptional()
  itemType?: ItemType; 


  createdAt: Date;
  updatedAt: Date;
}
