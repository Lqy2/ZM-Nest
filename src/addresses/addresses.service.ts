import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';

@Injectable()
export class AddressesService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(userId: string, createAddressDto: CreateAddressDto) {
    const { isDefault = false } = createAddressDto;

    return this.prismaService.$transaction(async (prisma) => {
      if (isDefault) {
        await prisma.userAddress.updateMany({
          where: { userId, isDefault: true },
          data: { isDefault: false },
        });
      }

      if (!isDefault) {
        const count = await prisma.userAddress.count({ where: { userId } });
        if (count === 0) {
          createAddressDto.isDefault = true;
        }
      }

      return prisma.userAddress.create({
        data: {
          userId,
          ...createAddressDto,
        },
      });
    });
  }

  async findAll(userId: string) {
    return this.prismaService.userAddress.findMany({
      where: { userId },
      // orderBy: [{ isDefault: 'desc' }, { createdAt: 'desc' }],
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(userId: string, id: number) {
    const address = await this.prismaService.userAddress.findUnique({
      where: { id, userId },
    });

    if (!address) {
      throw new NotFoundException('收货地址不存在');
    }

    return address;
  }

  async update(
    userId: string,
    id: number,
    updateAddressDto: UpdateAddressDto,
  ) {
    await this.findOne(userId, id);

    const { isDefault } = updateAddressDto;

    return this.prismaService.$transaction(async (prisma) => {
      if (isDefault) {
        await prisma.userAddress.updateMany({
          where: { userId, isDefault: true, id: { not: id } },
          data: { isDefault: false },
        });
      }

      return prisma.userAddress.update({
        where: { id, userId },
        data: updateAddressDto,
      });
    });
  }

  async remove(userId: string, id: number) {
    await this.findOne(userId, id);

    return this.prismaService.userAddress.delete({
      where: { id, userId },
    });
  }

  async setDefault(userId: string, id: number) {
    await this.findOne(userId, id);

    return this.prismaService.$transaction(async (prisma) => {
      const resetResult = await prisma.userAddress.updateMany({
        where: { userId, isDefault: true, id: { not: id } },
        data: { isDefault: false },
      });
      console.log('重置了', resetResult.count, '个默认地址');

      const result = await prisma.userAddress.update({
        where: { id, userId },
        data: { isDefault: true },
      });
      console.log('设置结果:', result.isDefault);

      return result;
    });
  }
}
