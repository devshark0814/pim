import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index/Index.vue'
import Dashboard from '@/pages/Dashboard/Dashboard.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    }
  ]
})
