import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { YURequestInterceptors, YURequestConfig } from './type'

class HYRequest {
  instance: AxiosInstance
  interceptors?: YURequestInterceptors

  constructor(config: YURequestConfig) {
    // 创建axios实例
    this.instance = axios.create(config)

    // 保存基本信息
    this.interceptors = config.interceptors

    // 使用拦截器
    // 1.从config中取出的拦截器是对应的实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
    // 2.添加所有的实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log('所有实例都有的请求拦截器')
        return config
      },
      (err) => {
        console.log('所有实例都有的请求拦截器，请求失败')
        return err
      }
    )
    this.instance.interceptors.response.use(
      (config) => {
        console.log('所有实例都有的响应拦截器')
        return config
      },
      (err) => {
        console.log('所有实例都有的响应拦截器')
        return err
      }
    )
  }
  request(config: YURequestConfig): void {
    if (config.interceptors?.requestInterceptor) {
      config = config.interceptors.requestInterceptor(config)
    }
    this.instance.request(config).then((res) => {
      if (config.interceptors?.responseInterceptor) {
        res = config.interceptors.responseInterceptor(res)
      }
      console.log(res)
    })
  }
}

export default HYRequest
