import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/index'
import House from '@/house'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/house/:id',
      name: 'house',
      component: House
    }
  ]
})
