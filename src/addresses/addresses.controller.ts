import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AddressesService } from './addresses.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { CurrentUser } from '@/auth/current-user.decorator';
import type { JwtPayload } from '@/common/interfaces/jwt-payload.interface';

@Controller('addresses')
export class AddressesController {
  constructor(private readonly addressesService: AddressesService) {}

  // 创建收货地址
  @Post()
  create(
    @CurrentUser() user: JwtPayload,
    @Body() createAddressDto: CreateAddressDto,
  ) {
    return this.addressesService.create(user.userId, createAddressDto);
  }

  // 获取所有收货地址
  @Get()
  findAll(@CurrentUser() user: JwtPayload) {
    return this.addressesService.findAll(user.userId);
  }

  // 获取收货地址详情
  @Get(':id')
  findOne(@CurrentUser() user: JwtPayload, @Param('id') id: number) {
    return this.addressesService.findOne(user.userId, +id);
  }

  // 更新收货地址
  @Patch(':id')
  update(
    @CurrentUser() user: JwtPayload,
    @Param('id') id: number,
    @Body() updateAddressDto: UpdateAddressDto,
  ) {
    return this.addressesService.update(user.userId, +id, updateAddressDto);
  }

  // 删除收货地址
  @Delete(':id')
  remove(@CurrentUser() user: JwtPayload, @Param('id') id: number) {
    return this.addressesService.remove(user.userId, +id);
  }

  // 设置默认收货地址
  @Patch(':id/default')
  setDefault(@CurrentUser() user: JwtPayload, @Param('id') id: number) {
    return this.addressesService.setDefault(user.userId, +id);
  }
}
