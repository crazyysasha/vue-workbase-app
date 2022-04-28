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
  {
    path: '/account',
    name: 'account',
    component: () => import(/* webpackChunkName: "account" */ '../views/AccountView.vue'),
    beforeEnter(to, from) {

      if (!isAuthentificated.value)
        return false

    }
  },
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
  {
    path: '/orders',
    name: 'orders',
    component: () => import(/* webpackChunkName: "orders" */ '../views/OrdersView.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/legal',
    name: 'legal',
    component: () => import(/* webpackChunkName: "legal" */ '../views/LegalView.vue'),
  },
  {
    path: '/faq',
    name: 'faq',
    component: () => import(/* webpackChunkName: "faq" */ '../views/FaqView.vue'),
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/ContactView.vue'),
  },
  {
    path: '/usage',
    name: 'usage',
    component: () => import(/* webpackChunkName: "usage" */ '../views/UsageAgreementsView.vue'),
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import(/* webpackChunkName: "signup" */ '../views/SignUpView.vue'),
  },
  {
    path: '/forcustomers',
    name: 'forcustomers',
    component: () => import(/* webpackChunkName: "forcustomers" */ '../views/ForCustomersView.vue'),
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import(/* webpackChunkName: "blog" */ '../views/BlogView.vue'),
  },
  {
    path: '/post/:slug',
    name: 'post',
    component: () => import(/* webpackChunkName: "post" */ '../views/PostView.vue'),
  },
  {
    path: '/wallet',
    name: 'wallet',
    component: () => import(/* webpackChunkName: "wallet" */ '../views/WalletView.vue'),
  },
  {
    path: '/bonus',
    name: 'bonus',
    component: () => import(/* webpackChunkName: "bonus" */ '../views/BonusView.vue'),
  },
  {
    path: '/support',
    name: 'support',
    component: () => import(/* webpackChunkName: "support" */ '../views/SupportView.vue'),
  },
  {
    path: '/termsofuse',
    name: 'termsofuse',
    component: () => import(/* webpackChunkName: "termsofuse" */ '../views/TermsOfUseView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
  }
})

export default router
