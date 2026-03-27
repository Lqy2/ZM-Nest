import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException, Scope } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ModuleRef, ContextIdFactory } from '@nestjs/core';
import { Request } from 'express';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(
    private authService: AuthService,
    private moduleRef: ModuleRef,
  ) {
    super({ usernameField: 'name', passReqToCallback: true });
  }

  async validate(
    request: Request,
    name: string,
    password: string,
  ): Promise<any> {
    const contextId = ContextIdFactory.getByRequest(request as any);
    // "AuthService" is a request-scoped provider
    const authService = await this.moduleRef.resolve(AuthService, contextId);

    const user = await this.authService.validateUser(name, password);
    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
