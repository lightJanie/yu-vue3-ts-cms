// service统一出口
import YURequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

const yuRequest = new YURequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      // 携带token的拦截
      console.log('请求拦截')
      return config
    },
    requestInterceptorCatch: (err) => {
      console.log('请求异常拦截')
      return err
    },
    responseInterceptor: (res) => {
      console.log('响应拦截')
      return res
    },
    responseInterceptorCatch: (err) => {
      console.log('响应异常拦截')
      return err
    }
  }
})

export default yuRequest
