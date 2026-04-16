import { IListData, IPagination } from '../interfaces/response.interface';

/**
 * 响应辅助工具类
 */
export class ResponseHelper {
  /**
   * 构建列表响应数据（带分页）
   * @param list 列表数据
   * @param total 总条数
   * @param current 当前页码
   * @param pageSize 每页条数
   */
  static buildListData<T>(
    list: T[],
    total: number,
    current: number,
    pageSize: number,
  ): IListData<T> {
    const totalPages = Math.ceil(total / pageSize);

    const pagination: IPagination = {
      current,
      pageSize,
      total,
      totalPages,
    };

    return {
      list,
      pagination,
    };
  }

  /**
   * 构建空列表响应数据
   * @param current 当前页码
   * @param pageSize 每页条数
   */
  static buildEmptyListData<T>(
    current: number,
    pageSize: number,
  ): IListData<T> {
    return this.buildListData<T>([], 0, current, pageSize);
  }
}
