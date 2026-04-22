import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsBooleanString,
} from 'class-validator';
import { PaginationDto } from '../../common/dto/pagination.dto';

export class FilterCourseDto extends PaginationDto {
  id: number;
  @IsOptional()
  @IsString()
  name?: string;
  @IsOptional()

  @IsOptional()
  @IsString()
  itemType?: string;
  createdAt: Date;
  updatedAt: Date;
}
