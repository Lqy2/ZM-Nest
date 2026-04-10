import { IsString } from 'class-validator';
export class getDownloadUrlDto {
    @IsString()
    fileKey: string;
}