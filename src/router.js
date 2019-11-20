import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from './pages/LandingPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '*',
      component: LandingPage
    }
  ]
})
