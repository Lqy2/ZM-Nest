import { IsString, IsNotEmpty, IsPhoneNumber, IsBoolean, IsOptional } from 'class-validator';

export class CreateAddressDto {
  @IsString()
  @IsNotEmpty()
  name: string;//姓名

  @IsString()
  @IsNotEmpty()
  @IsPhoneNumber('CN', { message: '请输入正确的手机号' })
  phone: string;//手机号

  @IsString()
  @IsNotEmpty()
  address: string;//完整地址信息

  @IsString()
  @IsNotEmpty()
  detail: string;//详细门牌号

  @IsBoolean()
  @IsOptional()
  isDefault?: boolean;//是否默认地址
}
