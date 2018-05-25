import Vue from 'vue'
import Router from 'vue-router'
import VentTab from '@/examples/vent-tab'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'VentTab',
      component: VentTab
    }
  ]
})
