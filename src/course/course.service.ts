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
    const { video, coverImage, categoryId } = createCourseDto;

    // 课程数据
    const data: Prisma.CourseCreateInput = {
      // name: createCourseDto.name,
      // description: createCourseDto.description,
      // category: { connect: { id: categoryId } },
      // price: createCourseDto.price,
      type: createCourseDto.type,
      // isPublished: createCourseDto.isPublished,
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
      video: {
        connectOrCreate: {
          where: { fileKey: video.fileKey },
          create: video,
        },
      },
    };

    return this.prismaService.course.create({
      data,
    });
  }

  async findAll(filterCourseDto: FilterCourseDto) {
    const { name, id, current, pageSize, skip, take } = filterCourseDto;
    const where: Prisma.CourseWhereInput = {};
    // if (name) {
    //   where.name = {
    //     contains: name, //模糊查询
    //   };
    // }
    if (id) {
      where.id = {
        equals: id,
      };
    }
    const [list, total] = await Promise.all([
      this.prismaService.course.findMany({
        where,
        skip,
        take,
        include: {
          coverImage: true,
          video: true,
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
      video: item.video
        ? {
            downloadUrl: this.uploadService.getSignedUrl(item.video.fileKey),
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

  async findOne(id: number) {
    const course = await this.prismaService.course.findUnique({
      where: { id },
      include: {
        coverImage: true,
        video: true,
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
      video: course.video
        ? {
            downloadUrl: this.uploadService.getSignedUrl(
              course.video.fileKey,
            ),
          }
        : null,
    };
  }

  async update(id: number, updateCourseDto: UpdateCourseDto) {
    const { video, coverImage, categoryId } = updateCourseDto;

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
      // name: updateCourseDto.name,
      // description: updateCourseDto.description,
      // category: { connect: { id: categoryId } },
      // price: updateCourseDto.price,
      type: updateCourseDto.type,
      // isPublished: updateCourseDto.isPublished,
      previewDuration: updateCourseDto.previewDuration,
      coverImage: coverImage
        ? {
            connectOrCreate: {
              where: { fileKey: coverImage.fileKey },
              create: coverImage,
            },
          }
        : undefined,

      video: video
        ? {
            connectOrCreate: {
              where: { fileKey: video.fileKey },
              create: video,
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

  async remove(id: number) {
    return this.prismaService.course.delete({
      where: {
        id,
      },
    });
  }
}
