import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { PrismaService } from '../prisma/prisma.service';
import { UploadModule } from '../upload/upload.module';

@Module({
  controllers: [ProductController],
  providers: [ProductService, PrismaService],
  imports: [UploadModule],
  exports: [ProductService],
})
export class ProductModule {}
