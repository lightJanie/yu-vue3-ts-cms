import { createApp } from 'vue'
import { globalRegister } from './global'
import 'normalize.css'
import './assets/css/index.less'

import App from './App.vue'
import router from './router'
import store from './store'
import { setupStore } from './store'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// import yuRequest from './service'

const app = createApp(App)
app.use(globalRegister)
app.use(store)
setupStore() //把浏览器缓存的token，userInfo，userMenus加载到store

app.use(router)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

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
// yuRequest.request({
//   url: '/home/multidata',
//   method: 'get',
//   showLoading: false
// })
