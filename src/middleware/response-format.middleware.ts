// middleware/response-format.middleware.ts
import { Request, Response, NextFunction } from 'express';
export function responseFormatMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  // 保存原始的 res.json 方法
  const originalJson = res.json;

  // 重写 res.json 方法
  res.json = function (data) {
    // 统一格式：成功返回 { code: 200, data, msg: 'success' }
    const formattedData = {
      code: res.statusCode === 200 ? 200 : res.statusCode,
      data: data as unknown,
      msg: res.statusCode === 200 ? 'success' : 'fail',
    };
    return originalJson.call(this, formattedData) as Response;
  };

  next();
}
