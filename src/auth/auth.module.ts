import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';
import { AuthController } from './auth.controller';
import { PrismaModule } from '../prisma/prisma.module';
// import { JwtAuthGuard } from './jwt-auth.guard';
// import { RolesGuard } from './roles.guard';
// import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    UsersModule,
    PrismaModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '7d' },
    }),
  ],
  providers: [
    AuthService,
    LocalStrategy,
    JwtStrategy,
    // JwtAuthGuard,
    // RolesGuard,
    // {
    //   provide: APP_GUARD,
    //   useClass: JwtAuthGuard,
    // },
    // {
    //   provide: APP_GUARD,
    //   useClass: RolesGuard,
    // },
  ],
  exports: [
    AuthService,
    // , JwtAuthGuard,
    // RolesGuard,
    JwtModule,
  ],
  controllers: [AuthController],
})
export class AuthModule {}
