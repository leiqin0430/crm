import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
const Header = () => import('@/views/header.vue')
const Index = () => import('@/views/index.vue')
const AddCustomer = () => import('@/views/addCustomer.vue')
const Customer = () => import('@/views/customer.vue')

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Hello',
    //   component: Hello
    // },
    {
      path: '/app',
      name: 'header',
      component: Header,
      children: [
        {
          path: 'index',
          component: Index
        },
        {
          path: '/addCustomer',
          component: AddCustomer
        },
        {
          path: '/customer',
          component: Customer
        }
      ]
    }
  ]
})