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
export const getCusList = (params, fn1, fn2) => {
  return httpService(new HttpConfig({
    url: '/cus/list',
    method: 'post',
    params: params,
    reminder: false,
    success: fn1,
    error: fn2
  }))
}
export const getCusQuery = (params, fn1, fn2) => {
  return httpService(new HttpConfig({
    url: '/cus/query',
    method: 'post',
    params: params,
    reminder: false,
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
export const getCusUsers = (params, fn1, fn2) => {
  return httpService(new HttpConfig({
    url: '/cus/users/' + params.roleId,
    method: 'get',
    reminder: false,
    success: fn1,
    error: fn2
  }))
}
export const cusPrice = (params, fn1, fn2) => {
  return httpService(new HttpConfig({
    url: '/cus/price',
    method: 'post',
    params: params,
    reminder: true,
    success: fn1,
    error: fn2
  }))
}
export const cusAcceptPrice = (params, fn1, fn2) => {
  return httpService(new HttpConfig({
    url: '/cus/acceptPrice',
    method: 'post',
    params: params,
    reminder: true,
    success: fn1,
    error: fn2
  }))
}
export const cusFollow = (params, fn1, fn2) => {
  return httpService(new HttpConfig({
    url: '/cus/follow',
    method: 'post',
    params: params,
    reminder: true,
    success: fn1,
    error: fn2
  }))
}
export const cusSave = (params, fn1, fn2) => {
  return httpService(new HttpConfig({
    url: '/cus/save',
    method: 'post',
    params: params,
    reminder: true,
    success: fn1,
    error: fn2
  }))
}
