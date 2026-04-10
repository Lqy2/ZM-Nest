import {
  IsString,
  IsBoolean,
  Matches,
  IsNotEmpty,
  IsEmail,
  IsOptional,
  IsArray,
} from 'class-validator';
export class CreateUserDto {
  // // 用户名
  @IsString()
  @IsOptional()
  username?: string;
  // // 姓名
  @IsString()
  @IsOptional()
  name?: string;
  // // 手机号
  @IsString()
  @IsOptional()
  // 验证：中国手机号 + 不能为空
  @Matches(/^1[3-9]\d{9}$/, {
    message: '手机号格式不正确',
  })
  @IsNotEmpty({ message: '手机号不能为空' })
  @IsNotEmpty()
  phone: string;
  // // 角色
  @IsArray()
  @IsOptional()
  roles?: string[];
  // // 头像
  @IsString()
  @IsOptional()
  avatarUrl?: string;
  // // 邮箱
  @IsString()
  @IsOptional()
  @IsEmail({}, { message: '邮箱格式不正确' })
  email?: string;
  // // 性别
  @IsString()
  @IsOptional()
  gender?: string;
  // // 身份证类型
  @IsString()
  @IsOptional()
  idType?: string;
  // // 身份证号
  @IsString()
  @IsOptional()
  idNumber?: string;
  // // 企业名称
  @IsString()
  @IsOptional()
  entity?: string;
  // // 企业地址
  @IsString()
  @IsOptional()
  @IsOptional()
  entityAddress?: string;
  // // 密码
  @IsString()
  @IsNotEmpty({ message: '密码不能为空' })
  passwordHash: string;
  // // 状态
  @IsString()
  @IsOptional()
  status?: string;
  // // 是否授权
  @IsBoolean()
  @IsOptional()
  powerOfAttorney?: boolean;
  // // 验证码
  @IsString()
  @IsOptional()
  // 验证：6位数字
  @Matches(/^\d{6}$/, {
    message: '验证码格式不正确',
  })
  @IsNotEmpty({ message: '验证码不能为空' })
  verificationCode: string;
  message?: string;
  type?: 'REGISTER' | 'LOGIN';
}
