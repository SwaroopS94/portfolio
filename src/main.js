import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mixin from './AppMixin'

Vue.config.productionTip = false;

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
