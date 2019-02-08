import Vue from 'vue'
import CxltToastr from 'cxlt-vue2-toastr'
import router from './router'
import store from './store'
import App from './App.vue'
import '@/firebase'

import 'cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css'


require('./interceptors')

Vue.use(CxltToastr, {
  position: 'top right',
  showDuration: 2000
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
