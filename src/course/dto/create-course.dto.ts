import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsArray,
  IsString,
  IsBoolean,
} from 'class-validator';
import { FileDto } from '../../upload/dto/file.dto';

enum CourseType {
  FREE = 'FREE',
  PAID = 'PAID',
}

export class CreateCourseDto {
  // 商品名称
  @IsString()
  @IsNotEmpty({ message: '课程名称不能为空' })
  name: string;
  
  // 课程简介
  @IsString()
  description?: string;

  // 课程价格
  @IsNotEmpty()
  @IsNumber()
  @IsNotEmpty({ message: '课程价格不能为空' })
  price: number;

  // 课程类型
  @IsNotEmpty()
  @IsString()
  type: CourseType;

  // 是否上架
  @IsNotEmpty()
  @IsBoolean()
  isPublished: boolean;

  // 课程视频
  @IsNotEmpty({ message: '课程视频不能为空' })
  video: FileDto;

  // 课程封面
  @IsNotEmpty({ message: '课程封面不能为空' })
  coverImage: FileDto;

  // 试看时长（秒），默认5分钟
  @IsNumber()
  @IsNotEmpty({ message: '试看时长（秒），默认5分钟' })
  previewDuration: number;

  // 课程类目ID
  @IsString()
  @IsNotEmpty({ message: '课程类目ID不能为空' })
  categoryId: string;
}
