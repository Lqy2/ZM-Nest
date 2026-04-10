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

  @Public()
  @Post('presign')
  create(@Body() createUploadDto: CreateUploadDto) {
    return this.uploadService.create(createUploadDto);
  }

  @Post('get-download-url')
  getDownloadUrl(@Body() getDownloadUrlDto: getDownloadUrlDto) {
    // 直接拼接域名和文件键
    const cdnDomain = 'zmcdn.yqlts.com';
    return {
      // downloadUrl: this.ossService.getSignedUrl(getDownloadUrlDto.fileKey),
      downloadUrl: `https://${cdnDomain}/${getDownloadUrlDto.fileKey}`,
    };
  }

  @Get()
  findAll() {
    return this.uploadService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.uploadService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUploadDto: UpdateUploadDto) {
    return this.uploadService.update(+id, updateUploadDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.uploadService.remove(+id);
  }
}
