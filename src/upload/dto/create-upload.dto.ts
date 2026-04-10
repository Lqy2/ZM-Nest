import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUploadDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  fileName: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  contentType: string;
}
