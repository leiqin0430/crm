import HttpConfig from '@/bean/HttpConfig'
import httpService from '@/common/httpService'

export const getWxUserInfo = (params, fn1, fn2) => {
  return httpService(new HttpConfig({
    url: '/made/getWxUserInfo/' + params.code,
    method: 'get',
    reminder: false,
    success: fn1,
    error: fn2
  }))
}

export const getMediaInfo = (params, fn1, fn2) => {
  return httpService(new HttpConfig({
    url: '/made/get',
    method: 'post',
    params: params,
    reminder: false,
    success: fn1,
    error: fn2
  }))
}
