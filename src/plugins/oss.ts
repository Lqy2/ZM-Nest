// import OSS from 'ali-oss';
// import fp from 'fastify-plugin';

// /**
//  * 阿里云OSS插件
//  * 主要提供预签名URL功能，让前端直接上传到OSS
//  */
// export default fp(async (fastify, opts) => {
//   const client = new OSS({
//     accessKeyId: process.env.ALIBABA_CLOUD_ACCESS_KEY_ID,
//     accessKeySecret: process.env.ALIBABA_CLOUD_ACCESS_KEY_SECRET,
//     bucket: process.env.OSS_BUCKET,
//     region: process.env.OSS_REGION,
//     authorizationV4: true,
//     secure: true,
//   });

//   // 签名私有URL
//   async function getSignedUrl(fileKey, expires = 600) {
//     return client.signatureUrl(fileKey, {
//       method: 'GET',
//       expires,
//     });
//   }

//   // 读取对象内容为 Buffer
//   async function getObject(fileKey) {
//     const res = await client.get(fileKey);
//     // ali-oss 返回 { content, res }，content 可能是 Buffer 或 String
//     const content = res?.content ?? res?.data ?? null;
//     if (Buffer.isBuffer(content)) return content;
//     if (typeof content === 'string') return Buffer.from(content);
//     // 有些版本返回在 res.body 或者 res.requestUrls
//     const data = res?.data || res?.body || null;
//     if (Buffer.isBuffer(data)) return data;
//     if (typeof data === 'string') return Buffer.from(data);
//     throw new Error('OSS getObject 返回内容为空或不可识别');
//   }

//   // 删除对象
//   async function deleteObject(fileKey) {
//     return client.delete(fileKey);
//   }

//   // 可扩展 Redis 缓存签名URL等（略）

//   // 注册到 Fastify 实例
//   fastify.decorate('oss', {
//     client,
//     getSignedUrl,
//     getObject,
//     deleteObject,
//   });
// });
