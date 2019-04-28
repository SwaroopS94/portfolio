import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false;

let loaderMixin = {
  methods: {
    showToast(message) {
      console.log("Toast caught : ",message);
    }
  }
};

new Vue({
  router,
  render: function (h) { return h(App) },
  mixins: [loaderMixin]
}).$mount('#app')
