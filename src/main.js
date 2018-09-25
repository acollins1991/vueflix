import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
/* Implement font awesome with vue */
/* Implement Bootstrap-Vue */
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);
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
