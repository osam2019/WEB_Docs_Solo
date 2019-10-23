import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Mail from '../views/MailList'
import MailRender from "../components/MailRender";
import Analyze from "../views/Analyze";
import Stat from "../views/Statistics";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/mailList',
    name: 'mailList',
    component: Mail
  },
  {
    path: '/mailRender',
    name: 'mailRender',
    component: MailRender
  },
  {
    path: '/analyze',
    name: 'analyze',
    component: Analyze
  },
  {
    path: '/stat',
    name: 'stat',
    component: Stat
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
