import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { UploadService } from '../upload/upload.service';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '../generated/prisma/client';
import { FilterCourseDto } from './dto/filter-course.dto';
import { ResponseHelper } from '../common/utils/response.helper';

@Injectable()
export class CourseService {
  constructor(
    private readonly uploadService: UploadService,
    private readonly prismaService: PrismaService,
  ) {}
  create(createCourseDto: CreateCourseDto) {
    const { videoUrl, coverImage, categoryId } = createCourseDto;

    // 课程数据
    const data: Prisma.CourseCreateInput = {
      name: createCourseDto.name,
      description: createCourseDto.description,
      category: { connect: { id: categoryId } },
      price: createCourseDto.price,
      type: createCourseDto.type,
      isPublished: createCourseDto.isPublished,
      previewDuration: createCourseDto.previewDuration,
      // coverImage: coverImage.id
      //   ? { connect: { id: coverImage.id } }
      //   : { create: coverImage },
      // videoUrl: videoUrl.id
      //   ? { connect: { id: videoUrl.id } }
      //   : { create: videoUrl },
      coverImage: {
        connectOrCreate: {
          where: { fileKey: coverImage.fileKey },
          create: coverImage,
        },
      },
      videoUrl: {
        connectOrCreate: {
          where: { fileKey: videoUrl.fileKey },
          create: videoUrl,
        },
      },
    };

    return this.prismaService.course.create({
      data,
    });
  }

  async findAll(filterCourseDto: FilterCourseDto) {
    const { name, categoryId, current, pageSize, skip, take } = filterCourseDto;
    const where: Prisma.CourseWhereInput = {};
    if (name) {
      where.name = {
        contains: name, //模糊查询
      };
    }
    if (categoryId) {
      where.categoryId = {
        equals: categoryId,
      };
    }
    const [list, total] = await Promise.all([
      this.prismaService.course.findMany({
        where,
        skip,
        take,
        include: {
          category: true,
          coverImage: true,
          videoUrl: true,
        },
        orderBy: { createdAt: 'desc' },
      }),
      this.prismaService.course.count({ where }),
    ]);
    const processedList = list.map((item) => ({
      ...item, // 保留原有的所有属性
      // 👇 覆盖 galleryImages，TS 不会报错
      coverImage: item.coverImage
        ? {
            downloadUrl: this.uploadService.getSignedUrl(
              item.coverImage.fileKey,
            ),
          }
        : null,
      // 详情图也一样处理
      videoUrl: item.videoUrl
        ? {
            downloadUrl: this.uploadService.getSignedUrl(item.videoUrl.fileKey),
          }
        : null,
    }));
    return ResponseHelper.buildListData(
      processedList,
      total,
      current!,
      pageSize!,
    );
  }

  async findOne(id: string) {
    const course = await this.prismaService.course.findUnique({
      where: { id },
      include: {
        category: true,
        coverImage: true,
        videoUrl: true,
      },
    });

    if (!course) {
      return null;
    }

    return {
      ...course,
      // 封面图处理
      coverImage: course.coverImage
        ? {
            downloadUrl: this.uploadService.getSignedUrl(
              course.coverImage.fileKey,
            ),
          }
        : null,
      // 视频处理
      videoUrl: course.videoUrl
        ? {
            downloadUrl: this.uploadService.getSignedUrl(
              course.videoUrl.fileKey,
            ),
          }
        : null,
    };
  }

  async update(id: string, updateCourseDto: UpdateCourseDto) {
    const { videoUrl, coverImage, categoryId } = updateCourseDto;

    const course = await this.prismaService.course.findUnique({
      where: {
        id,
      },
    });
    if (!course) {
      throw new Error('课程不存在');
    }

    // 课程数据
    const data: Prisma.CourseUpdateInput = {
      name: updateCourseDto.name,
      description: updateCourseDto.description,
      category: { connect: { id: categoryId } },
      price: updateCourseDto.price,
      type: updateCourseDto.type,
      isPublished: updateCourseDto.isPublished,
      previewDuration: updateCourseDto.previewDuration,
      coverImage: coverImage
        ? {
            connectOrCreate: {
              where: { fileKey: coverImage.fileKey },
              create: coverImage,
            },
          }
        : undefined,

      videoUrl: videoUrl
        ? {
            connectOrCreate: {
              where: { fileKey: videoUrl.fileKey },
              create: videoUrl,
            },
          }
        : undefined,
    };
    return this.prismaService.course.update({
      where: {
        id,
      },
      data,
    });
  }

  async remove(id: string) {
    return this.prismaService.course.delete({
      where: {
        id,
      },
    });
  }
}
