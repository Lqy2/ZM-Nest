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
// import { responseFormatMiddleware } from './middleware/response-format.middleware';
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
// import { TransformInterceptor } from './common/interceptors/transform.interceptor';
import { UploadModule } from './upload/upload.module';
import { OrderModule } from './order/order.module';
import { CourseCategoryModule } from './course-category/course-category.module';
import { CourseModule } from './course/course.module';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';
import { AddressesModule } from './addresses/addresses.module';
import configuration from './config/configuration';

@Module({
  imports: [
    YModule,
    CatsModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      envFilePath: [`.env.${process.env.NODE_ENV || 'development'}`, '.env'],
      cache: true, // 缓存环境变量
    }),
    UserModule,
    PrismaModule,
    AuthModule,
    UsersModule,
    ProductCategoryModule,
    ProductModule,
    UploadModule,
    OrderModule,
    CourseCategoryModule,
    CourseModule,
    ShoppingCartModule,
    AddressesModule,
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
    // {
    //   provide: APP_INTERCEPTOR,
    //   useClass: TransformInterceptor,
    // },
  ],
})
// export class AppModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer
//       .apply(LoggerMiddleware, responseFormatMiddleware)
//       .forRoutes({ path: '*', method: RequestMethod.ALL });
//   }
// }
export class AppModule {}
