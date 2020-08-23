/**
 * @description 加密和解密session字符串
 */

import Global from '../../config/global'

export function selfEncode (str:string) :string {
  const l = Global.secret.length
  const a = Global.secret.split('')
  let s = ''; let b; let b1; let b2; let b3
  for (let i = 0; i < str.length; i++) {
    b = str.charCodeAt(i)
    b1 = b % l
    b = (b - b1) / l
    b2 = b % l
    b = (b - b2) / l
    b3 = b % l
    s += a[b3] + a[b2] + a[b1]
  }
  return s
}

export function selfDecode (str: string) :string {
  const l = Global.secret.length
  let b; let b1; let b2; let b3; let d = 0

  const s = new Array(Math.floor(str.length / 3))
  b = s.length
  for (let i = 0; i < b; i++) {
    b1 = Global.secret.indexOf(str.charAt(d))
    d++
    b2 = Global.secret.indexOf(str.charAt(d))
    d++
    b3 = Global.secret.indexOf(str.charAt(d))
    d++
    s[i] = b1 * l * l + b2 * l + b3
  }

  // eslint-disable-next-line no-eval
  b = eval('String.fromCharCode(' + s.join(',') + ')')
  return b
}
