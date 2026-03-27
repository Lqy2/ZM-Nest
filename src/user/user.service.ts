import { Injectable } from '@nestjs/common';
// import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma.service';
// import { Prisma, User } from '@custom/prisma';
import { Prisma, User } from '@prisma/client';
@Injectable()
export class UserService {
  // 注入 Prisma 服务
  constructor(private readonly prismaService: PrismaService) {}

  // 创建用户
  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    return this.prismaService.user.create({ data });
  }

  // 查询所有用户
  async findAllUsers(): Promise<User[]> {
    return this.prismaService.user.findMany();
  }

  // 根据 ID 查询用户
  async findUserById(id: number): Promise<User | null> {
    return this.prismaService.user.findUnique({
      where: { id },
    });
  }

  // 更新用户
  async updateUser(id: number, data: Prisma.UserUpdateInput): Promise<User> {
    return this.prismaService.user.update({
      where: { id },
      data,
    });
  }

  // 删除用户
  async deleteUser(id: number): Promise<User> {
    return this.prismaService.user.delete({
      where: { id },
    });
  }
}
