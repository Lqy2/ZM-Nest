import {
  IsNotEmpty,
  IsString,
  MinLength,
  MaxLength,
  Matches,
  IsBoolean,
} from 'class-validator';

export class SmsCodeDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(11)
  @MaxLength(11)
  @Matches(/^1[3-9]\d{9}$/, {
    message: '手机号格式不正确',
  })
  @IsNotEmpty({ message: '手机号不能为空' })
  phone: string;
  @IsNotEmpty({ message: '验证码不能为空' })
  @IsString()
  type: string;
}

export class SmsCodeResultDto {
  @IsBoolean()
  sent: boolean;
  message: string;
}
