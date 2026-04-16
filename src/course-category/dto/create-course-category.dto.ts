import { IsBoolean, IsBooleanString, IsNotEmpty, IsString } from 'class-validator';

export class CreateCourseCategoryDto {
  @IsNotEmpty({ message: '分类名称不能为空' })
  @IsString()
  name: string;
  @IsBoolean()
  isEnabled: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
