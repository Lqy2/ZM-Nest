import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  Logger,
} from '@nestjs/common';
import { FastifyReply, FastifyRequest } from 'fastify';

/**
 * 异常响应类型
 */
interface ExceptionResponse {
  message?: string | string[];
  error?: string;
  statusCode?: number;
}

/**
 * HTTP 异常过滤器
 * 统一处理所有 HTTP 异常，返回标准格式
 */
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(HttpExceptionFilter.name);

  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<FastifyReply>();
    const request = ctx.getRequest<FastifyRequest>();
    const status = exception.getStatus();

    const exceptionResponse = exception.getResponse();
    let message: string;

    if (typeof exceptionResponse === 'string') {
      message = exceptionResponse;
    } else {
      const responseObj = exceptionResponse as ExceptionResponse;
      const msg = responseObj.message || '请求失败';
      message = Array.isArray(msg) ? msg.join(', ') : msg;
    }

    const errorResponse = {
      success: false,
      message,
      data: null,
    };

    // 记录错误日志
    this.logger.error(
      `${request.method} ${request.url} - ${status}`,
      JSON.stringify(errorResponse),
    );

    response.status(status).send(errorResponse);
  }
}
