import { IsNotEmpty, IsString, IsOptional, IsArray, IsEnum } from "class-validator";

// 用户角色枚举（与 Prisma schema 对应）
enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export class CreateUserDto {
  @IsNotEmpty({ message: '用户名不能为空' })
  @IsString()
  account: string;

  @IsNotEmpty({ message: '手机号不能为空' })
  @IsString()
  phone: string;

  @IsNotEmpty({ message: '密码不能为空' })
  @IsString()
  password: string;

  @IsNotEmpty({ message: '姓名不能为空' })
  @IsString()
  name: string;

  @IsOptional()
  @IsArray()
  @IsEnum(Role, { each: true, message: '角色类型不正确' })
  roles?: Role[];

  @IsOptional()
  @IsString()
  email?: string;

  @IsOptional()
  @IsString()
  gender?: string;
}