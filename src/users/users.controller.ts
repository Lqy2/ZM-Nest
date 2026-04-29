import {
  Controller,
  Get,
  // Post,
  Body,
  Put,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import type { User } from '../generated/prisma';
import { Public } from '../auth/public.decorator';

// import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  // 创建用户 POST /users
  // @Post()
  // async create(
  //   @Body() createUserDto: { name: string; email: string; age?: number },
  // ): Promise<User> {
  //   return this.usersService.createUser(createUserDto);
  // }

  // 查询所有用户 GET /users
  @Public()
  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAllUsers();
  }

  // 查询单个用户 GET /users/:id
  @Get(':phone')
  async findOne(@Param('phone') phone: string): Promise<{ id: string; phone: string; passwordHash: string | null } | null> {
    return this.usersService.findOne(phone);
  }

  // 更新用户 PUT /users/:id
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<User> {
    return this.usersService.updateUser(id, updateUserDto);
  }

  // 删除用户 DELETE /users/:id
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<User> {
    return this.usersService.deleteUser(id);
  }

  // 更新用户头像
  @Patch(':id/avatar')
  async updateAvatar(
    @Param('id') id: string,
    @Body() body: { avatarId: number },
  ) {
    return this.usersService.updateAvatar(id, body.avatarId);
  }

}
