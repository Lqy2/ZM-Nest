// import { PartialType } from '@nestjs/mapped-types';
// import { CreateUserDto } from './create-user.dto';

// export class UpdateUserDto extends PartialType(CreateUserDto) {}
import { FileDto } from '../../upload/dto/file.dto';

import { IsOptional, IsString, IsArray, IsEnum, IsNumber } from "class-validator";

enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  account?: string;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsString()
  password?: string;

  @IsOptional()
  @IsArray()
  @IsEnum(Role, { each: true })
  roles?: Role[];

  @IsOptional()
  @IsString()
  email?: string;

  @IsOptional()
  @IsString()
  gender?: string;

   @IsOptional()
  @IsNumber()
  avatarId?: number;

  @IsOptional()
  avatar?: FileDto;
}