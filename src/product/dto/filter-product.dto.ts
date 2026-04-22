import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsBooleanString,
} from 'class-validator';
import { PaginationDto } from '../../common/dto/pagination.dto';

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
  createdAt: Date;
  updatedAt: Date;
}
