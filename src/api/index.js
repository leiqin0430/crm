import HttpConfig from '@/bean/HttpConfig'
import httpService from '@/common/httpService'

export const addCustomer = (params, fn1, fn2) => {
  return httpService(new HttpConfig({
    url: '/cus/new',
    method: 'post',
    params: params,
    reminder: true,
    success: fn1,
    error: fn2
  }))
}
export const getCusDetail = (params, fn1, fn2) => {
  return httpService(new HttpConfig({
    url: '/cus/detail',
    method: 'get',
    params: params,
    reminder: false,
    success: fn1,
    error: fn2
  }))
}
