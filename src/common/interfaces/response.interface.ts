/**
 * 通用响应接口
 */
export interface IResponse<T = any> {
  /**
   * 响应是否成功
   */
  success: boolean;

  /**
   * 响应消息
   */
  message: string;

  /**
   * 响应数据
   */
  data: T;
}

/**
 * 分页信息接口
 */
export interface IPagination {
  /**
   * 当前页码
   */
  current: number;

  /**
   * 每页条数
   */
  pageSize: number;

  /**
   * 总条数
   */
  total: number;

  /**
   * 总页数
   */
  totalPages: number;
}

/**
 * 列表响应数据接口
 */
export interface IListData<T> {
  /**
   * 列表数据
   */
  list: T[];

  /**
   * 分页信息
   */
  pagination: IPagination;
}

/**
 * 列表响应接口（带分页）
 */
export type IListResponse<T> = IResponse<IListData<T>>;
