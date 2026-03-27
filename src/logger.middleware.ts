import { Injectable, NestMiddleware } from '@nestjs/common';
// import { Request, Response, NextFunction } from 'express';
import { FastifyRequest, FastifyReply } from 'fastify';
// @Injectable() 装饰器的类中实现自定义 Nest 中间件
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  // use(req: Request, res: Response, next: NextFunction) {
  //   console.log('Request...');
  //   next();
  // }
  use(req: FastifyRequest['raw'], res: FastifyReply['raw'], next: () => void) {
    console.log('Request...');
    next();
  }
}
