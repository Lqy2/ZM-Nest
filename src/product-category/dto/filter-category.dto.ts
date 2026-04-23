import {
  IsBoolean,
  IsNotEmpty,
  IsEnum,
  IsOptional,
  IsString,
  IsBooleanString,
} from 'class-validator';
import { PaginationDto } from '../../common/dto/pagination.dto';
import { ItemType } from '../../generated/prisma';

export class FilterProductCategoryDto extends PaginationDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsBooleanString()
  isEnabled?: string;

  // 分类类型PRODUCT||COURSE
  @IsOptional()
  @IsString()
  @IsEnum(ItemType)
  itemType?: ItemType;
}
