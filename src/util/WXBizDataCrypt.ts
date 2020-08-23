/* eslint-disable node/no-deprecated-api */
/**
 * @description 小程序把加密数据encryptedData和iv发送给后端，后端解密
 */
import * as crypto from 'crypto'

export default function WXBizDataCrypt (sessionKey: string, encryptedData:string, iv:string) {
  const sessionKeyBase64 = new Buffer(sessionKey, 'base64')
  const encryptedDatBase64 = new Buffer(encryptedData, 'base64')
  const ivBase64 = new Buffer(iv, 'base64')
  try {
    // 解密
    const decipher = crypto.createDecipheriv('aes-128-cbc', sessionKeyBase64, ivBase64)
    decipher.setAutoPadding(true)
    let decoded = decipher.update(encryptedDatBase64, 'binary', 'utf8')
    decoded += decipher.final('utf8')
    return JSON.parse(decoded)
  } catch (err) {
    return { errorCode: 2323, errorMsg: `${err}` }
  }
}
