import { Injectable } from '@nestjs/common';
// import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma.service';
// import { Prisma, User } from '@custom/prisma';
import type { Prisma, User } from '../generated/prisma';
@Injectable()
export class UsersService {
  // 注入 Prisma 服务
  constructor(private readonly prismaService: PrismaService) {}

  // 创建用户
  // async createUser(data: Prisma.UserCreateInput): Promise<User> {
  //   return this.prismaService.user.create({ data });
  // }

  // 查询所有用户
  async findAllUsers(): Promise<User[]> {
    return this.prismaService.user.findMany();
  }

  // 根据 ID 查询用户
  async findUserById(id: string): Promise<User | null> {
    return this.prismaService.user.findUnique({
      where: { id },
    });
  }

  // 更新用户
  async updateUser(id: string, data: Prisma.UserUpdateInput): Promise<User> {
    return this.prismaService.user.update({
      where: { id },
      data,
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
}
