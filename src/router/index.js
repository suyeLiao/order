import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Category from '@/components/Category'
import Shopcart from '@/components/Shopcart'
import Personal from '@/components/Personal'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/Category',
      name: 'Category',
      component: Category
    },{
      path: '/Shopcart',
      name: 'Shopcart',
      component: Shopcart
    },{
      path: '/Personal',
      name: 'Personal',
      component: Personal
    }
  ]
})
