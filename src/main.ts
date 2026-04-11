import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

// import { JwtAuthGuard } from './auth/jwt-auth.guard';
// import { RolesGuard } from './auth/roles.guard';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { TransformInterceptor } from './common/interceptors/transform.interceptor';

import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  app.setGlobalPrefix('api');
  // 全局管道管道
  app.useGlobalPipes(new ValidationPipe());
  // 全局异常过滤器
  app.useGlobalFilters(new HttpExceptionFilter());
  // 全局拦截器
  app.useGlobalInterceptors(new TransformInterceptor());
  await app.listen(process.env.PORT ?? 9999);
}
bootstrap();
