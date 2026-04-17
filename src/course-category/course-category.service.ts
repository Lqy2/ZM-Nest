import { Injectable } from '@nestjs/common';
import { CreateCourseCategoryDto } from './dto/create-course-category.dto';
import { UpdateCourseCategoryDto } from './dto/update-course-category.dto';
import { PrismaService } from '../prisma/prisma.service';
import { FilterCourseCategoryDto } from './dto/filter-category.dto';
import { Prisma } from '../generated/prisma/client';
import { ResponseHelper } from '../common/utils/response.helper';

@Injectable()
export class CourseCategoryService {
  constructor(private readonly prismaService: PrismaService) {}
  // 创建课程分类
  create(createCourseCategoryDto: CreateCourseCategoryDto) {
    return this.prismaService.courseCategory.create({
      data: createCourseCategoryDto,
    });
  }
  // 获取所有课程分类列表
  async findAll(filterCourseCategoryDto: FilterCourseCategoryDto) {
    const { name, isEnabled, current, pageSize, skip, take } =
      filterCourseCategoryDto;
    // console.log(skip, take);
    // 构建查询条件
    const where: Prisma.CourseCategoryWhereInput = {};
    if (name) {
      where.name = {
        contains: name,
      };
    }
    if (isEnabled !== undefined) {
      where.isEnabled = isEnabled === 'true';
    }

    const [list, total] = await Promise.all([
      this.prismaService.courseCategory.findMany({
        where,
        skip,
        take,
        orderBy: { createdAt: 'desc' },
      }),
      this.prismaService.courseCategory.count({ where }),
    ]);
    return ResponseHelper.buildListData(list, total, current!, pageSize!);
  }
  // 获取课程分类详情
  findOne(id: string) {
    return this.prismaService.courseCategory.findUnique({
      where: {
        id,
      },
    });
  }
  // 更新课程分类
  update(id: string, updateCourseCategoryDto: UpdateCourseCategoryDto) {
    return this.prismaService.courseCategory.update({
      where: {
        id,
      },
      data: updateCourseCategoryDto,
    });
  }

  remove(id: string) {
    return this.prismaService.courseCategory.delete({
      where: {
        id,
      },
    });
  }
}
