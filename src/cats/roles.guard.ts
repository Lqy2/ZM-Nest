import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
  ForbiddenException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // const roles = this.reflector.get(Roles, context.getHandler());
    // if (!roles) {
    //   return true;
    // }
    // const request = context.switchToHttp().getRequest();
    // const user = request.user;
    // return matchRoles(roles, user.roles);
    // 获取当前接口标记的需要的角色
    const requiredRoles = this.reflector.get<string[]>(
      'roles',
      context.getHandler(),
    );
    if (!requiredRoles) {
      // 没有标记角色，默认允许访问
      return true;
    }

    // 从请求中获取用户信息（假设 JWT 解析后把用户信息存在 req.user）
    const { user } = context.switchToHttp().getRequest();
    if (!user) {
      throw new UnauthorizedException('未登录');
    }

    // 校验用户角色是否匹配
    const hasRole = requiredRoles.includes(user.role);
    if (!hasRole) {
      throw new ForbiddenException('无访问权限');
    }
    return true;
  }
}
