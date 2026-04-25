import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsBooleanString,
  IsNumber,
  ValidateNested,
} from 'class-validator';

import { PaginationDto } from '../../common/dto/pagination.dto';



export class FilterCartDto extends PaginationDto {
  @IsOptional()
  @IsNumber()
  id?: number;

  @IsOptional()
  @IsString()
  name?: string;


}
