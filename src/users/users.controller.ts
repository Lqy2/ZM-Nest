import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '@prisma/client';
import { Public } from '../auth/public.decorator';

// import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // 创建用户 POST /users
  @Post()
  async create(
    @Body() createUserDto: { name: string; email: string; age?: number },
  ): Promise<User> {
    return this.usersService.createUser(createUserDto);
  }

  // 查询所有用户 GET /users
  @Public()
  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAllUsers();
  }

  // 查询单个用户 GET /users/:id
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<User | null> {
    return this.usersService.findUserById(+id); // 转换为数字
  }

  // 更新用户 PUT /users/:id
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: { name?: string; email?: string; age?: number },
  ): Promise<User> {
    return this.usersService.updateUser(+id, updateUserDto);
  }

  // 删除用户 DELETE /users/:id
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<User> {
    return this.usersService.deleteUser(+id);
  }
}
