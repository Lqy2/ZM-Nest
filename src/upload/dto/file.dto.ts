import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString, Min, IsOptional } from 'class-validator';

export class FileDto {
  @ApiProperty({ description: '数据库id' })
  @IsInt()
  @IsOptional()
  id?: number;

  @ApiProperty({ description: '文件存储 key（OSS key）' })
  @IsString()
  @IsNotEmpty()
  fileKey: string;

  @ApiProperty({ description: '原始文件名' })
  @IsString()
  @IsNotEmpty()
  fileName: string;

  @ApiProperty({ description: '文件大小（字节）' })
  @IsInt()
  @Min(0)
  fileSize: number;

  @ApiProperty({ description: 'MIME 类型，如 image/png' })
  @IsString()
  @IsNotEmpty()
  mimeType: string;
}
