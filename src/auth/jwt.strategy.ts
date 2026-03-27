import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from './constants';

@Injectable()
// 继承PassportStrategy，指定使用passport-jwt的Strategy
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // 从请求头的 Authorization 字段中提取 JWT // 从请求头的「Authorization: Bearer <令牌>」中提取JWT
      ignoreExpiration: false, // 忽略过期的 JWT 令牌// 不忽略过期时间：Passport自动验证令牌是否过期，过期直接返回401
      secretOrKey: jwtConstants.secret, // 用于验证 JWT 令牌签名的密钥// 验签密钥：必须和生成令牌的密钥一致
    });
  }

  // 核心方法：Passport验签成功后，自动调用这个方法，传入解码后的载荷
  async validate(payload: any) {
    return { userId: payload.sub, username: payload.name };
  }
}
