import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
