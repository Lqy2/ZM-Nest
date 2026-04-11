// // // middleware/response-format.middleware.ts
// import { Request, Response, NextFunction } from 'express';
// export function responseFormatMiddleware(
//   req: Request,
//   res: Response,
//   next: NextFunction,
// ) {
//   // 保存原始的 res.json 方法
//   // const originalJson = res.json;
//   // // 重写 res.json 方法
//   // res.json = function (data) {
//   //   // 统一格式：成功返回 { code: 200, data, msg: 'success' }
//   //   const formattedData = {
//   //     code: res.statusCode === 200 ? 200 : res.statusCode,
//   //     data: data as unknown,
//   //     msg: res.statusCode === 200 ? 'success' : 'fail',
//   //   };
//   //   return originalJson.call(this, formattedData) as Response;
//   // };

//   const originalJson = res.json;

//   // 正确重写 json，保持 this 指向 + 链式调用
//   res.json = function (data: any): Response {
//     const formattedData = {
//       code: res.statusCode === 200 ? 200 : res.statusCode,
//       data: data,
//       msg: res.statusCode === 200 ? 'success' : 'fail',
//     };

//     // 关键：必须用 originalJson.call 保持 this 指向 res
//     return originalJson.call(this, formattedData);
//   };
//   next();
// }
