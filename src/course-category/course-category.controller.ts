import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { CourseCategoryService } from './course-category.service';
import { CreateCourseCategoryDto } from './dto/create-course-category.dto';
import { UpdateCourseCategoryDto } from './dto/update-course-category.dto';
import { FilterCourseCategoryDto } from './dto/filter-category.dto';
import { Public } from '../auth/public.decorator';

@Controller('course-category')
export class CourseCategoryController {
  constructor(private readonly courseCategoryService: CourseCategoryService) {}

  // 创建课程分类
  @Post()
  create(@Body() createCourseCategoryDto: CreateCourseCategoryDto) {
    return this.courseCategoryService.create(createCourseCategoryDto);
  }

  // 获取所有课程分类列表
  @Get()
  @Public()
  findAll(@Query() filterCourseCategoryDto: FilterCourseCategoryDto) {
    return this.courseCategoryService.findAll(filterCourseCategoryDto);
  }

  // 获取课程分类详情
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.courseCategoryService.findOne(+id);
  }

  // 更新课程分类
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCourseCategoryDto: UpdateCourseCategoryDto,
  ) {
    return this.courseCategoryService.update(+id, updateCourseCategoryDto);
  }

  // 删除课程分类
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.courseCategoryService.remove(+id);
  }
}
