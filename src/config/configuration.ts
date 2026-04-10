export default () => ({
  port: parseInt(process.env.PORT || '3000', 10),
  database: {
    url: process.env.DATABASE_URL,
  },
  security: {
    bcryptSaltRounds: parseInt(process.env.BCRYPT_SALT_ROUNDS || '10', 10),
  },
  aliyun: {
    accessKeyId: process.env.ALIBABA_CLOUD_ACCESS_KEY_ID,
    accessKeySecret: process.env.ALIBABA_CLOUD_ACCESS_KEY_SECRET,
    bucket: process.env.OSS_BUCKET,
    region: process.env.OSS_REGION,
    endpoint: process.env.OSS_ENDPOINT,
  },
  wechat: {
    appId: process.env.WECHAT_APP_ID,
    appSecret: process.env.WECHAT_APP_SECRET,
    mchid: process.env.WECHAT_PAY_MCHID,
    certificateSerial: process.env.WECHAT_PAY_CERTIFICATE_SERIAL,
    platformPublicKeyId: process.env.WECHAT_PAY_PLATFORM_PUBLIC_KEY_ID,
    apiV3Key: process.env.WECHAT_PAY_API_V3_KEY,
    notifyUrl: process.env.WECHAT_PAY_NOTIFY_URL,
  },
});
