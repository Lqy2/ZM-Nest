import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UploadService } from './upload.service';
import { CreateUploadDto } from './dto/create-upload.dto';
import { UpdateUploadDto } from './dto/update-upload.dto';
import { getDownloadUrlDto } from './dto/get-download-url.dto';
import { Public } from '../auth/public.decorator';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) { }

  // 获取预签名上传URL
  @Public()
  @Post('presign')
  create(@Body() createUploadDto: CreateUploadDto) {
    return this.uploadService.create(createUploadDto);
  }


  // 获取文件下载URL
  @Post('get-download-url')
  getDownloadUrl(@Body() getDownloadUrlDto: getDownloadUrlDto) {
    // 直接拼接域名和文件键
    const cdnDomain = 'zmcdn.yqlts.com';
    return {
      downloadUrl: this.uploadService.getSignedUrl(getDownloadUrlDto.fileKey),
      // downloadUrl: `https://${cdnDomain}/${getDownloadUrlDto.fileKey}`,
    };
  }
}
