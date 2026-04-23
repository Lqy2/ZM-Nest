import { IsNotEmpty, IsString, IsNumber, IsOptional, IsArray, ValidateIf } from 'class-validator';
import { FileDto } from '../../upload/dto/file.dto';
import { CreateCourseDto } from './create-course.dto';


export class CreateProductDto {
  // 商品名称
  @IsString()
  @IsNotEmpty({ message: '商品名称不能为空' })
  name: string;
  // 商品描述
  @IsString()
  description?: string;
  // 商品价格
  @IsNotEmpty()
  @IsNumber()
  @IsNotEmpty({ message: '商品价格不能为空' })
  price: number;
  // 商品优惠价
  @IsOptional()
  @IsNumber()
  @IsNotEmpty({ message: '商品优惠价不能为空' })
  discountPrice?: number;

  // 商品库存
  @IsNotEmpty()
  @IsNumber()
  @IsNotEmpty({ message: '商品库存不能为空' })
  stock: number;

  // 商品图集（列表页/轮播）
  @ValidateIf(o => o.courseDetail === undefined || o.courseDetail === null)//当 courseDetail 不存在 或 为 null 时，才验证下面的字段
  @IsArray()
  @IsNotEmpty({ message: '商品图集不能为空' })
  galleryImages?: FileDto[];


  @ValidateIf(o => o.courseDetail === undefined || o.courseDetail === null)
  @IsArray()
  @IsNotEmpty({ message: '商品详情图不能为空' })
  detailImages?: FileDto[];

  // 商品类目ID
  @IsNumber()
  @IsNotEmpty({ message: '商品类目ID不能为空' })
  categoryId: number;

  // 课程详情
  @IsOptional()
  courseDetail?: CreateCourseDto;
}
