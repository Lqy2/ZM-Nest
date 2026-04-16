import { IsOptional, IsInt, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiPropertyOptional } from '@nestjs/swagger';

/**
 * 分页查询 DTO
 */
export class PaginationDto {
  @ApiPropertyOptional({
    description: '页码',
    default: 1,
    minimum: 1,
  })
  @IsOptional()
  @Type(() => Number)
  @IsInt({ message: '页码必须是整数' })
  @Min(1, { message: '页码最小为1' })
  current?: number = 1;

  @ApiPropertyOptional({
    description: '每页条数',
    default: 10,
    minimum: 1,
    maximum: 100,
  })
  @IsOptional()
  @Type(() => Number)
  @IsInt({ message: '每页条数必须是整数' })
  @Min(1, { message: '每页条数最小为1' })
  @Max(100, { message: '每页条数最大为100' })
  pageSize?: number = 10;

  /**
   * 获取跳过的记录数（用于数据库查询）
   */
  get skip(): number {
    return (this.current! - 1) * this.pageSize!;
  }

  /**
   * 获取查询条数（用于数据库查询）
   */
  get take(): number {
    return this.pageSize!;
  }
}
