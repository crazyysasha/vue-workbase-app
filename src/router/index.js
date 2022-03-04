import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { header: 'primary' }
  },
  {
    path: '/:category',
    name: 'makeOrder',
    component: () => import(/* webpackChunkName: "makeOrder" */ '../views/makeOrder/IndexView.vue'),
    meta: { header: 'secondary' },
    children: [
      {

        path: ':services',
        name: 'SearchService',
        component: () => import(/* webpackChunkName: "makeOrder" */ '../views/makeOrder/SearchServiceView.vue'),
        meta: { header: 'secondary' },
      },
    ],
  },
  {
    path: '/help',
    name: 'help',
    component: () => import(/* webpackChunkName: "faq" */ '../views/HelpView.vue')
  },
  {
    path: '/wallet',
    name: 'wallet',
    component: () => import(/* webpackChunkName: "wallet" */ '../views/WalletView.vue')
  },
  {
    path: '/account',
    name: 'account',
    component: () => import(/* webpackChunkName: "account" */ '../views/AccountView.vue'),
  },
  {
    path: '/:pathMath(.*)*',
    name: '404',
    component: () => import(/* webpackChunkName: "404" */ '../views/NotFoundView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
