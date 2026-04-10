import { IsString, Matches, IsNotEmpty } from 'class-validator';
export class LoginDtoPassword {
  // // 手机号
  @IsString()
  // 验证：中国手机号 + 不能为空
  @Matches(/^1[3-9]\d{9}$/, {
    message: '手机号格式不正确',
  })
  @IsNotEmpty({ message: '手机号不能为空' })
  phone: string;
  // // 密码
  @IsString()
  @IsNotEmpty({ message: '密码不能为空' })
  password: string;
}
export class LoginDtoSmsCode {
  // // 手机号
  @IsString()
  // 验证：中国手机号 + 不能为空
  @Matches(/^1[3-9]\d{9}$/, {
    message: '手机号格式不正确',
  })
  @IsNotEmpty({ message: '手机号不能为空' })
  phone: string;

  // // 验证码
  @IsString()
  // 验证：6位数字
  @Matches(/^\d{6}$/, {
    message: '验证码格式不正确',
  })
  @IsNotEmpty({ message: '验证码不能为空' })
  smsCode: string;
}
