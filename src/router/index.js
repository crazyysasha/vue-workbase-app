import { isAuthentificated } from '@/composables/auth';
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { header: 'primary' }
  },

  // {
  //   path: '/help',
  //   name: 'help',
  //   component: () => import(/* webpackChunkName: "faq" */ '../views/HelpView.vue')
  // },
  // {
  //   path: '/wallet',
  //   name: 'wallet',
  //   component: () => import(/* webpackChunkName: "wallet" */ '../views/WalletView.vue')
  // },
  // {
  //   path: '/account',
  //   name: 'account',
  //   component: () => import(/* webpackChunkName: "account" */ '../views/AccountView.vue'),
  //   beforeEnter(to, from) {

  //     if (!isAuthentificated.value)
  //       return false

  //   }
  // },
  // {
  //   path: '/:category',
  //   name: 'makeOrder',
  //   component: () => import(/* webpackChunkName: "orderIndex" */ '../views/makeOrder/IndexView.vue'),
  //   // meta: { header: 'secondary' },
  //   // props: true,
  //   children: [
  //     {
  //       path: '',
  //       name: 'SearchService',
  //       // props: true,
  //       component: () => import(/* webpackChunkName: "orderSearchService" */ '../views/makeOrder/SearchServiceView.vue'),
  //       // meta: { header: 'secondary' },
  //     },
  //     {

  //       path: ':services+',
  //       name: 'SearchService',
  //       component: () => import(/* webpackChunkName: "orderSelectService" */ '../views/makeOrder/SelectServiceView.vue'),
  //       meta: { header: 'secondary' },
  //     },
  //   ],
  // },
  // { path: '/test', name: 'test', component: () => import(/* webpackChunkName: "test" */ '../views/TestView.vue') },
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
