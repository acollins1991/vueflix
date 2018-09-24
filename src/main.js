import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import './registerServiceWorker'
/* import APIRequest class which creates axios instance, assign to window object, and create vue mixin */
import APIRequest from './utils/APIRequest'
window.$APIRequest = new APIRequest()
Vue.mixin({
  data: function(){
    return {
      get APIRequest() {
        return window.$APIRequest.instance()
      }
    }
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
