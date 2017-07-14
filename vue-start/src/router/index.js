import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/List'
import Bye from '@/components/Bye'
import Detail from '@/components/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'List',
      component: List
    }, {
      path: '/new',
      name: 'Bye',
      component: Bye
    }, {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ]
})
