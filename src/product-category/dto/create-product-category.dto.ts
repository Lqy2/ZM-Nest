import { IsBoolean, IsNotEmpty, IsString, IsEnum } from 'class-validator';
import { ItemType } from '../../generated/prisma';
export class CreateProductCategoryDto  {

  @IsNotEmpty({ message: '商品分类名称不能为空' })
  @IsString()
  name: string;

  @IsBoolean()
  isEnabled: boolean;

  @IsNotEmpty({ message: '商品分类类型不能为空' })
  @IsEnum(ItemType)
  itemType: ItemType;
  

}
