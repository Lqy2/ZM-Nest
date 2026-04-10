import Dysmsapi20170525, * as $Dysmsapi20170525 from '@alicloud/dysmsapi20170525';
import * as $OpenApi from '@alicloud/openapi-client';
import * as $Util from '@alicloud/tea-util';
import { ResponseError } from '../error/response_error.js';

let client;
function getClient() {
  const accessKeyId = process.env.ALIBABA_CLOUD_ACCESS_KEY_ID;
  const accessKeySecret = process.env.ALIBABA_CLOUD_ACCESS_KEY_SECRET;
  if (!accessKeyId || !accessKeySecret) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    throw new ResponseError(
      '环境变量 ALIBABA_CLOUD_ACCESS_KEY_ID 或 ALIBABA_CLOUD_ACCESS_KEY_SECRET 未设置',
    );
  }
  if (!client) {
    const config = new $OpenApi.Config({ accessKeyId, accessKeySecret });
    config.endpoint = 'dysmsapi.aliyuncs.com';
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
    client = new Dysmsapi20170525(config);
  }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return client;
}

export async function sendSmsVerifyCode(params) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const c = getClient();
  const sendSmsRequest = new $Dysmsapi20170525.SendSmsRequest(params);
  const runtime = new $Util.RuntimeOptions({});

  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    const result = await c.sendSmsWithOptions(sendSmsRequest, runtime);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (result.body.code === 'OK') {
      return {
        success: true,
        message: '短信发送成功',
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
        bizId: result.body.bizId,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
        requestId: result.body.requestId,
      };
    }
    return {
      success: false,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
      message: result.body.message || '短信发送失败',
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
      code: result.body.code || 'UNKNOWN_ERROR',
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
      requestId: result.body.requestId,
    };
  } catch (error) {
    return {
      success: false,
      message: '短信发送失败',
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
      code: error.code || 'UNKNOWN_ERROR',
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
      requestId: error.requestId,
    };
  }
}

export async function sendAdminSideVerificationCode(
  phoneNumbers,
  code,
  product,
) {
  const params = {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    phoneNumbers,
    templateCode: 'SMS_498680095',
    signName: '中满体育',
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    templateParam: `${JSON.stringify({ code })}`,
  };
  const result = await sendSmsVerifyCode(params);
  if (result.success) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return code;
  }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  throw new ResponseError(`${result.message}`);
}
