import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { message } from 'ant-design-vue'

Vue.config.productionTip = false;
//全局配置ant-design的message
Vue.prototype.$message = message;
message.config({
  duration:5,
  top:'200px',
})
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
