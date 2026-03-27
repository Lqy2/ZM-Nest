import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { YModule } from './y/y.module';
import { CatsService } from './cats/cats.service';
import { LoggerMiddleware } from './logger.middleware';
import { CatsModule } from './cats/cats.module';
import { responseFormatMiddleware } from './middleware/response-format.middleware';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma/prisma.service';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { ProductCategoryModule } from './product-category/product-category.module';
import { ProductModule } from './product/product.module';
import { TransformInterceptor } from './cats/transform.interceptor';

@Module({
  imports: [
    YModule,
    CatsModule,
    ConfigModule.forRoot({
      isGlobal: true,
      // load: [configuration],
      envFilePath: [`.env.${process.env.NODE_ENV || 'development'}`, '.env'],
      cache: true, // 缓存环境变量
    }),
    UserModule,
    PrismaModule,
    AuthModule,
    UsersModule,
    ProductCategoryModule,
    ProductModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    CatsService,
    PrismaService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformInterceptor,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware, responseFormatMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
