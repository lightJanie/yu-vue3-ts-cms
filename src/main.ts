import { createApp } from 'vue'
import { globalRegister } from './global'

import App from './App.vue'
import router from './router'
import store from './store'

import yuRequest from './service'

const app = createApp(App)
app.use(globalRegister)
app.use(store)
app.use(router)

app.mount('#app')

// yuRequest.request({
//   url: '/home/multidata',
//   method: 'get',
//   interceptors: {
//     requestInterceptor: (config) => {
//       console.log('单独请求的拦截器')
//       return config
//     },
//     responseInterceptor: (config) => {
//       console.log('单独请求的响应拦截器')
//       return config
//     }
//   }
// })
yuRequest.request({
  url: '/home/multidata',
  method: 'get',
  showLoading: false
})
