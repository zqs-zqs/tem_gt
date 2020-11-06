import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import qs from 'qs'
import infinite from 'vue-infinite-scroll'
//导入Mint Ui
import MintUi from 'mint-ui'
//导入样式文件
import 'mint-ui/lib/style.min.css'
//导入moment
import moment from "moment"
Vue.prototype.moment = moment;
//注册为Vue的插件
Vue.use(MintUi)
Vue.use(infinite)
axios.defaults.baseURL = 'http://127.0.0.1:3000'
Vue.prototype.axios = axios;
Vue.config.productionTip = false
Vue.prototype.qs=qs;

// 引入日历插件
import vueHashCalendar from 'vue-hash-calendar'
import 'vue-hash-calendar/lib/vue-hash-calendar.css'
Vue.use(vueHashCalendar)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
