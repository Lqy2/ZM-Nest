import { Injectable } from '@nestjs/common';
// import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';
import { BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
// import { Prisma, User } from '@custom/prisma';
import type { Prisma, User } from '../generated/prisma';
import { NotFoundException } from '@nestjs/common';
import { UploadService } from '../upload/upload.service';
@Injectable()
export class UsersService {
  // 注入 Prisma 服务
  constructor(
    private readonly prismaService: PrismaService,
    private readonly uploadService: UploadService
  ) { }

  // 创建用户
  // async createUser(data: Prisma.UserCreateInput): Promise<User> {
  //   return this.prismaService.user.create({ data });
  // }

  // 查询所有用户
  async findAllUsers(): Promise<User[]> {
    return this.prismaService.user.findMany();
  }

  // 根据 ID 查询用户
  async findUserById(id: string) {
    const user = await this.prismaService.user.findUnique({
      where: { id },
      include: {
        avatar: true,
      },
    });
    const processedUser = {
      ...user,
      avatar: user?.avatar?.id ? this.uploadService.getSignedUrl(user.avatar.fileKey) : null,
    };
    return processedUser;
  }

  // 更新用户
  async updateUser(id: string, updateUserDto: UpdateUserDto) {
    // 构建更新数据对象
    const updateData: any = {};

    // 处理密码字段（需要哈希）
    if (updateUserDto.password) {
      updateData.passwordHash = await bcrypt.hash(updateUserDto.password, 10);
    }

    // 处理其他字段
    if (updateUserDto.account !== undefined) {
      updateData.account = updateUserDto.account;
    }
    if (updateUserDto.name !== undefined) {
      updateData.name = updateUserDto.name;
    }
    if (updateUserDto.phone !== undefined) {
      updateData.phone = updateUserDto.phone;
    }
    if (updateUserDto.roles !== undefined) {
      updateData.roles = updateUserDto.roles;
    }
    if (updateUserDto.email !== undefined) {
      updateData.email = updateUserDto.email;
    }
    if (updateUserDto.gender !== undefined) {
      updateData.gender = updateUserDto.gender;
    }
    if (updateUserDto.avatar !== undefined) {
      updateData.avatar = updateUserDto.avatar.id
        ? { connect: { id: updateUserDto.avatar.id } }
        : { create: {} };
    }

    // 如果没有任何更新字段，抛出错误
    if (Object.keys(updateData).length === 0) {
      throw new BadRequestException('没有提供任何要更新的字段');
    }

    return this.prismaService.user.update({
      where: { id },
      data: updateData,
    });
  }

  // 删除用户
  async deleteUser(id: string): Promise<User> {
    return this.prismaService.user.delete({
      where: { id },
    });
  }

  // 根据手机号查询用户
  async findOne(
    phone: string,
  ): Promise<{ id: string; phone: string; passwordHash: string | null } | null> {
    return this.prismaService.user.findUnique({
      where: { phone },
      select: {
        id: true,
        phone: true,
        passwordHash: true,
      },
    });
  }


  // 更新用户头像
  async updateAvatar(id: string, avatarId: number) {
    // 验证文件是否存在
    const file = await this.prismaService.file.findUnique({
      where: { id: avatarId },
    });

    if (!file) {
      throw new NotFoundException('头像文件不存在');
    }

    return this.prismaService.user.update({
      where: { id },
      data: { avatarId },
      include: {
        avatar: true,
      },
    });
  }
}
