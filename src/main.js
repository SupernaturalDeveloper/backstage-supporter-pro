import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'  //引入element-ui库
import VForm from 'vform-builds'  //引入VForm库
import 'element-ui/lib/theme-chalk/index.css'  //引入element-ui样式
import 'vform-builds/dist/VFormDesigner.css'  //引入VForm样式
Vue.config.productionTip = false
Vue.use(ElementUI)  //全局注册element-ui
Vue.use(VForm)  //全局注册VForm(同时注册了v-form-designer和v-form-render组件)

import request from '@/api'
Vue.prototype.$R = request;
require('./mock/mock')
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
