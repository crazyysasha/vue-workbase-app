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

        path: '/:category',
        name: 'makeOrderSearch',
        component: () => import(/* webpackChunkName: "makeOrder" */ '../views/makeOrder/SearchView.vue'),
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
