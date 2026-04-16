import { ApiProperty } from '@nestjs/swagger';

/**
 * 响应数据
 */
export class ResponseDto<T> {
  @ApiProperty({ description: '业务状态码', example: 200 })
  code: number;

  @ApiProperty({ description: '响应消息', example: '操作成功' })
  message: string;

  @ApiProperty({ description: '响应数据' })
  data: T;
}
