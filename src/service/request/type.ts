import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface YURequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (config: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (error: any) => any
}

export interface YURequestConfig extends AxiosRequestConfig {
  interceptors?: YURequestInterceptors
}
