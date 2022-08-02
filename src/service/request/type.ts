import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface YURequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

export interface YURequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: YURequestInterceptors<T>
  showLoading?: boolean
}
