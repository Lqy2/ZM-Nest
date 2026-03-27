import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// import { JwtAuthGuard } from './auth/jwt-auth.guard';
// import { RolesGuard } from './auth/roles.guard';

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
  await app.listen(process.env.PORT ?? 9999);
}
bootstrap();
