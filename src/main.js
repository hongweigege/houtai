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
Vue.prototype.$request = request

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
