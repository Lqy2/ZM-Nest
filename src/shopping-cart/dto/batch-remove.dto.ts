import { IsArray, IsNotEmpty } from 'class-validator';

export class BatchRemoveDto {
  @IsArray()
  @IsNotEmpty()
  productIds: number[];
}
