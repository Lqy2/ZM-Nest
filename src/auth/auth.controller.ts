import {
  Controller,
  //   Get,
  Post,
  Body,
  // UseGuards,
  Param,
  //   Put,
  //   Param,
  Delete,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import type { RegisterResult } from './auth.service';
import { Public } from '../auth/public.decorator';

import { CreateUserDto } from './dto/create-user.dto';
import { LoginDtoPassword, LoginDtoSmsCode } from './dto/login.dto';
// import { JwtAuthGuard } from './jwt-auth.guard';
import { SmsCodeDto } from './dto/sms-code.dto';
import type { DeleteUserResultDto } from './dto/delete-user-result.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // 创建用户 POST /users
  @Public()
  @Post('send-sms-code')
  async sendSmsCode(@Body() sendSmsCodeDto: SmsCodeDto): Promise<any> {
    return await this.authService.sendSmsCode(sendSmsCodeDto);
  }

  // 注册用户
  @Public()
  @Post('register')
  async register(
    @Body() createUserDto: CreateUserDto,
  ): Promise<RegisterResult> {
    return await this.authService.register(createUserDto);
  }

  // 登录用户-密码登录
  @Public()
  @Post('login-password')
  async login(@Body() loginDto: LoginDtoPassword): Promise<any> {
    const user = await this.authService.validateUser(
      loginDto.phone,
      loginDto.password,
    );
    if ('message' in user) {
      return user;
    }
    return this.authService.login(user);
  }

  // 登录用户-短信验证码
  @Public()
  @Post('login-sms-code')
  loginSmsCode(@Body() loginDto: LoginDtoSmsCode): any {
    return this.authService.loginSmsCode(loginDto);
  }

  @Delete('delete-user/:id')
  deleteUser(@Param('id') id: string): Promise<DeleteUserResultDto> {
    return this.authService.deleteUser(id);
  }
}
