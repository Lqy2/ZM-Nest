import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException, Scope } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ModuleRef, ContextIdFactory } from '@nestjs/core';
import { Request } from 'express';
import * as bcrypt from 'bcrypt';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(
    private authService: AuthService,
    private moduleRef: ModuleRef,
  ) {
    super({ usernameField: 'phone', passReqToCallback: true });
  }

  async validate(
    request: Request,
    phone: string,
    password: string,
  ): Promise<any> {
    const contextId = ContextIdFactory.getByRequest(request);
    // "AuthService" is a request-scoped provider
    const authService = await this.moduleRef.resolve(AuthService, contextId);

    const user = await this.authService.validateUser(phone, password);
    
    if (!user) {
      throw new UnauthorizedException();
    }
    
    return user;
  }
}
