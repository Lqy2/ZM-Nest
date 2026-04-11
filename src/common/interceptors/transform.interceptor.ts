import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  HttpStatus,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IResponse } from '../interfaces/response.interface';

/**
 * 统一响应拦截器
 * 将所有成功的响应包装成统一格式
 */
@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<
  T,
  IResponse<T>
> {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<IResponse<T>> {
    return next.handle().pipe(
      map((data: T) => ({
        success: true,
        message: '操作成功',
        data: data,
        code: HttpStatus.OK,
      })),
    );
  }
}
