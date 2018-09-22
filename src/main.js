import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import './registerServiceWorker'
/* import plugin axios requests, accessible via APIRequest.get(endpoint, paramsobject) */
import APIRequest from './utils/APIRequest'
Vue.use(APIRequest)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
