import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { YURequestInterceptors, YURequestConfig } from './type'
import { LoadingInstance } from 'element-plus/es/components/loading/src/loading'

import { ElLoading } from 'element-plus'

const DEFAULT_LOADING = true
class HYRequest {
  instance: AxiosInstance
  interceptors?: YURequestInterceptors
  showLoading: boolean
  loading?: LoadingInstance

  constructor(config: YURequestConfig) {
    // 创建axios实例
    this.instance = axios.create(config)

    // 保存基本信息
    this.interceptors = config.interceptors
    this.showLoading = config.showLoading ?? DEFAULT_LOADING

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
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '正在请求数据...',
            background: 'rgba(0,0,0,0.5)'
          })
        }
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
        setTimeout(() => {
          this.loading?.close()
        }, 1000)
        // this.loading?.close()
        return config
      },
      (err) => {
        console.log('所有实例都有的响应拦截器')
        return err
      }
    )
  }
  request<T = any>(config: YURequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      if (config.showLoading == false) {
        this.showLoading = false
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          this.showLoading = DEFAULT_LOADING
          resolve(res)
        })
        .catch((err) => {
          this.showLoading = DEFAULT_LOADING
          reject(err)
        })
    })
  }
  get<T>(config: YURequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }
  post<T>(config: YURequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }
  delete<T>(config: YURequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }
  patch<T>(config: YURequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default HYRequest
