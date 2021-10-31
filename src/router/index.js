import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SignUp from '../views/SignUp.vue'
import LogIn from '../views/LogIn.vue'
import get_loan from '../components/get_loan'
import submit_loan from '../components/submit_loan'
import pay_installment from '../components/pay_installment'
import amortization_table from '../components/amortization_table'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/log-in',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: '/get_loan',
    name: 'get_loan',
    component: get_loan
  },
  {
    path: '/submit_loan',
    name: 'submit_loan',
    component: submit_loan
  },
  {
    path: '/pay_installment',
    name: 'pay_installment',
    component: pay_installment
  },
  {
    path: '/amortization_table',
    name: 'amortization_table',
    component: amortization_table
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
