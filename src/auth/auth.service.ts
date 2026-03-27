import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
// import { Scope } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(
    // 注入 UsersService 和 JwtService
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  //验证用户名和密码
  async validateUser(name: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(name);
    if (user && user.password === pass) {
      // 剔除密码，只返回其他信息（重要：避免密码泄露）
      const { password, ...result } = user;
      return result;
    }
    return {
      throw: '用户名或密码错误',
    };
  }

  async login(user: any) {
    const payload = { name: user.name, sub: user.id, roles: user.roles };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
