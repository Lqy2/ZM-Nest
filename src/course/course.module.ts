import { Module } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseController } from './course.controller';
import { PrismaService } from '../prisma/prisma.service';
import { UploadModule } from '@/upload/upload.module';

@Module({
  controllers: [CourseController],
  providers: [CourseService,PrismaService],
  imports: [UploadModule],
  exports: [CourseService],
})
export class CourseModule {}
