/**
 * 本地缓存
 * @param key
 * @param value
 */
export const setLocalData = (key, value) => {
  switch (typeof value) {
    case 'number':
    case 'string':
      localStorage.setItem(key, value)
      break
    case 'object':
      localStorage.setItem(key, JSON.stringify(value))
      break
    default:
      break
  }
}

/**
 * 取出本地数据
 * @param key
 * @returns {any}
 */
export const getLocalData = (key) => {
  return JSON.parse(localStorage.getItem(key))
}

/**
 * 移除本地数据
 * @param key
 */
export const removeLocalData = (key) => {
  localStorage.removeItem(key)
}

  /**
 * 获取地址栏参数
 * @param name
 * @returns {*}
 */
export const getQueryString = (name) => {
  let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
  let r = window.location.search.substr(1).match(reg)
  if (r !== null) {
    return unescape(r[2])
  } else {
    return null
  }
  // return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1].replace(/\+/g, '%20')) || null

  // return decodeURIComponent((new RegExp('[?|&]'+name+'='+'([^&;]+?)(&|#|;|$)').exec(location.href)||[,""])[1].replace(/\+/g,'%20'))||null;
}

/**
 * 解析url参数
 * @example "?id=12345&a=b"
 * @return Object {id: 12345, a: b}
 */
export const urlParse = () => {
  // 从url获取到参数字符串
  let url = window.location.search
  let obj = {}
  // 正则规则
  let reg = /[?&][^?&]+=[^?&]+/g
  // match() 方法可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配。
  // 结果返回 ["?id=12345", "&a=b"]
  let arr = url.match(reg)
  // console.log(arr)
  if (arr) {
    arr.forEach((item) => {
      let tempArr = item.substring(1).split('=')
      // decodeURIComponent() 函数可对 dencodeURIComponent() 函数编码的 URI 进行解码。
      let key = decodeURIComponent(tempArr[0])
      let val = decodeURIComponent(tempArr[1])
      obj[key] = val
    })
  }
  return obj
}

/**
 * 时间戳日期格式化
 * @param flag
 * @param timestamp
 * @returns {string}
 */
export const timestampFormat = (flag, timestamp) => {
  if (!timestamp) {
    return ''
  }
  // 时间戳为10位需*1000，为13位时无需*1000
  let date = new Date(timestamp)
  let y = date.getFullYear()
  let m = date.getMonth() + 1
  let d = date.getDate()
  let h = date.getHours()
  let mi = date.getMinutes()
  let s = date.getSeconds()
  m = (m < 10) ? ('0' + m) : m
  d = (d < 10) ? ('0' + d) : d
  h = (h < 10) ? ('0' + h) : h
  mi = (mi < 10) ? ('0' + mi) : mi
  s = (s < 10) ? ('0' + s) : s
  switch (flag) {
    case 'ss':
      return y + '-' + m + '-' + d + ' ' + h + ':' + mi + ':' + s
    case 'mi':
      return y + '-' + m + '-' + d + ' ' + h + ':' + mi
    case 'dd':
    default:
      return y + '-' + m + '-' + d
  }
}

// 关于textare输入回车和空格的数据库存储和读取问题
// 创建了两个函数：一个用来存储数据时格式的转换，一个用来显示数据时格式的解析
/**
 * 当存入数据库时调用
 * @param strValue
 */
export const getFormatCode = (strValue) => {
  return strValue.replace(/\r\n/g, '<br/>').replace(/\n/g, '<br/>').replace(/\s/g, ' ')
}
/**
 * 当显示数据时调用
 * @param strValue
 */
export const decryptCode = (strValue) => {
  return strValue.replace(/<br\s*\/?>/ig, '\r\n').replace(/<br\s*\/?>/ig, '\n').replace(/ /g, ' ')
}
/**
 * 判断是PC端还是移动端
 * @returns {boolean}
 * @constructor
 */
export const isPC = () => {
  let userAgentInfo = navigator.userAgent
  let Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod']
  let flag = true
  for (let i = 0; i < Agents.length; i++) {
    if (userAgentInfo.indexOf(Agents[i]) > 0) {
      flag = false
      break
    }
  }
  return flag
}
