import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsBooleanString,
} from 'class-validator';
import { PaginationDto } from '../../common/dto/pagination.dto';

export class FilterCourseCategoryDto extends PaginationDto {
  id: string;
  @IsOptional()
  @IsString()
  name?: string;
  @IsOptional()
  @IsBooleanString()
  isEnabled?: string;
  createdAt: Date;
  updatedAt: Date;
}
