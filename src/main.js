import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import request from './utils'
import store from './store'

Vue.use(ElementUI);
Vue.use(VueRouter)

Vue.config.productionTip = false
Vue.config.silent = true
Vue.prototype.$request = request
const originalPush = VueRouter.prototype.push
// 重写了原型上的push方法，统一的处理了错误信息
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
