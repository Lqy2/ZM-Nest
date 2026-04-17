import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CreateUploadDto } from './dto/create-upload.dto';
import { UpdateUploadDto } from './dto/update-upload.dto';
import { PrismaService } from '@/prisma/prisma.service';
import { nanoid } from 'nanoid';
import { BadRequestException } from '@nestjs/common';
import OSS from 'ali-oss';

@Injectable()
export class UploadService {
  private readonly client: OSS;
  constructor(
    private readonly configService: ConfigService,
    private prisma: PrismaService,
  ) {
    const accessKeyId = this.configService.get<string>('aliyun.accessKeyId');
    const accessKeySecret = this.configService.get<string>(
      'aliyun.accessKeySecret',
    );
    const bucket = this.configService.get<string>('aliyun.bucket');
    const region = this.configService.get<string>('aliyun.region');

    if (!accessKeyId || !accessKeySecret || !bucket || !region) {
      throw new Error(
        'OSS配置不完整，请检查环境变量中的 aliyun.accessKeyId, aliyun.accessKeySecret, aliyun.bucket, aliyun.region',
      );
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
    this.client = new OSS({
      accessKeyId,
      accessKeySecret,
      bucket,
      region,
      authorizationV4: true,
      secure: true,
    });
  }

  // 获取预签名上传URL
  async create(createUploadDto: CreateUploadDto) {
    console.log(createUploadDto);
    const a1 = createUploadDto.fileName.split('.');
    if (a1.length !== 2) {
      throw new BadRequestException('文件名格式不正确');
    }
    const fileName = `${a1[0]}${nanoid()}.${a1[1]}`;
    const fileKey = `static/${fileName}`;
    const putSignedUrl = await this.putSignedUrl(
      fileKey,
      createUploadDto.contentType,
    );
    return {
      uploadUrl: putSignedUrl,
      fileKey,
      fileName,
    };
  }

  // 生成上传URL
  async putSignedUrl(fileKey: string, contentType: string): Promise<string> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    const uploadUrl = this.client.signatureUrl(fileKey, {
      method: 'PUT',
      expires: 3600, // 1小时过期
      'Content-Type': contentType,
    });

    // 记录待清理的临时文件
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000); // 1小时后过期
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    await (this.prisma as any).tempFile.create({
      data: {
        fileKey,
        expiresAt,
      },
    });

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return uploadUrl;
  }

  // 获取文件下载URL
  getSignedUrl(objectKey: string, expires = 600): string {
    return this.client.signatureUrl(objectKey, {
      method: 'GET',
      expires,
    });
  }

  findAll() {
    return `This action returns all upload`;
  }

  findOne(id: number) {
    return `This action returns a #${id} upload`;
  }

  update(id: number, updateUploadDto: UpdateUploadDto) {
    console.log(updateUploadDto);
    return `This action updates a #${id} upload`;
  }

  remove(id: number) {
    return `This action removes a #${id} upload`;
  }
}
