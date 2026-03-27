import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
// import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
import { User } from '@prisma/client';
import { Public } from '../auth/public.decorator';
import { Roles } from '../auth/roles.decorator';
import { Role } from '../auth/role.enum';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // 创建用户 POST /users
  @Post()
  async create(
    @Body() createUserDto: { name: string; email: string; age?: number },
  ): Promise<User> {
    return this.userService.createUser(createUserDto);
  }

  // 查询所有用户 GET /users
  @Public()
  @Get('alluser')
  async findAll(): Promise<User[]> {
    return this.userService.findAllUsers();
  }

  // 查询单个用户 GET /users/:id
  @Get(':id')
  @Roles(Role.ADMIN)
  async findOne(@Param('id') id: string): Promise<User | null> {
    return this.userService.findUserById(+id); // 转换为数字
  }

  // 更新用户 PUT /users/:id
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: { name?: string; email?: string; age?: number },
  ): Promise<User> {
    return this.userService.updateUser(+id, updateUserDto);
  }

  // 删除用户 DELETE /users/:id
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<User> {
    return this.userService.deleteUser(+id);
  }
}
