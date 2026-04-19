import { Module } from '@nestjs/common';
import { UploadService } from './upload.service';
import { UploadController } from './upload.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [UploadController],
  providers: [UploadService],
  imports: [PrismaModule],
  exports: [UploadService],
})
export class UploadModule { }
