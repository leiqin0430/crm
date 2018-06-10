/**
 * Created by leiqin on 2018/6/11.
 */
import HttpConfig from '@/bean/HttpConfig'
import httpService from '@/common/httpService'

export const login = (params, fn1, fn2) => {
  return httpService(new HttpConfig({
    url: '/made/get',
    method: 'post',
    params: params,
    reminder: false,
    success: fn1,
    error: fn2
  }))
}
export const logout = (params, fn1, fn2) => {
  return httpService(new HttpConfig({
    url: '/made/getWxUserInfo/' + params.code,
    method: 'get',
    reminder: false,
    success: fn1,
    error: fn2
  }))
}
