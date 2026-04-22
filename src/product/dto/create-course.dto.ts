import { IsNotEmpty, IsOptional, IsNumber, IsEnum } from 'class-validator';
import { FileDto } from '../../upload/dto/file.dto';
import { CourseType } from '../../generated/prisma';

export class CreateCourseDto {
  // 课程类型
  @IsEnum(CourseType)
  type?: CourseType;
  
  // 封面图
  @IsNotEmpty()
  coverImage: FileDto;
  
  // 视频文件
  @IsNotEmpty()
  video: FileDto;
  
  // 试看时长（分）
  @IsOptional()
  @IsNumber()
  previewDuration?: number;
  
}