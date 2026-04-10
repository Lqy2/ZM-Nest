import { ResponseError } from '../error/response_error.js';

/**
 * 生成指定长度的随机数字字符串（不包含0）
 * @param {number} length - 需要生成的随机数字的长度
 * @returns {string} - 返回指定长度的随机数字字符串
 */
export function generateRandomNumberWithoutZero(length) {
  if (length <= 0 || !Number.isInteger(length)) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    throw new ResponseError('长度必须是正整数');
  }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  return Array.from({ length }, () => Math.floor(Math.random() * 9) + 1).join(
    '',
  );
}

/**
 * 生成指定长度的随机数字字符串
 * @param {number} length - 需要生成的随机数字的长度
 * @returns {string} - 返回指定长度的随机数字字符串
 */
export function generateRandomNumber(length) {
  if (length <= 0 || !Number.isInteger(length)) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    throw new ResponseError('长度必须是正整数');
  }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  return Array.from({ length }, () => Math.floor(Math.random() * 10)).join('');
}
