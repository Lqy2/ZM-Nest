import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsBooleanString,
} from 'class-validator';
import { PaginationDto } from '../../common/dto/pagination.dto';

export class FilterCourseDto extends PaginationDto {
  id: string;
  @IsOptional()
  @IsString()
  name?: string;
  @IsOptional()
  @IsString()
  categoryId?: string;
  createdAt: Date;
  updatedAt: Date;
}
