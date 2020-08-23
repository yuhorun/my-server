/**
 * @param  {string='yyyy_MM_dd_hh_mm_ss'} fmt
 * @returns string
 * @description 格式化时间，默认yyyy_MM_dd_hh_mm_ss
 */
function timeFormat (fmt:string = 'yyyy_MM_dd_hh_mm_ss') :string {
  const now = new Date()
  const o = {
    'M+': now.getMonth() + 1, // 月份
    'd+': now.getDate(), // 日
    'h+': now.getHours(), // 小时
    'm+': now.getMinutes(), // 分
    's+': now.getSeconds(), // 秒
    S: now.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (now.getFullYear() + '').substr(4 - RegExp.$1.length))
  for (const k in o) { if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length))) }
  return fmt
}

export default timeFormat
