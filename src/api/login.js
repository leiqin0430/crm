/**
 * Created by leiqin on 2018/6/11.
 */
import HttpConfig from '@/bean/HttpConfig'
import httpService from '@/common/httpService'

export const login = (params, fn1, fn2) => {
  return httpService(new HttpConfig({
    url: '/sys/login',
    method: 'post',
    params: params,
    reminder: true,
    success: fn1,
    error: fn2
  }))
}

export const logout = (params, fn1, fn2) => {
  return httpService(new HttpConfig({
    url: '/sys/logout',
    method: 'get',
    params: params,
    reminder: true,
    success: fn1,
    error: fn2
  }))
}
