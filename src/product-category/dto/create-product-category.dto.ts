import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateProductCategoryDto  {
  id: string;
  @IsNotEmpty({ message: '商品分类名称不能为空' })
  @IsString()
  name: string;
  @IsBoolean()
  isEnabled: boolean;
  createdAt: Date;
  updatedAt: Date;
}
