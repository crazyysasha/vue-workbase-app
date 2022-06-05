
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
    path: "/:categorySlug",
    name: "order.index",
    component: () => import(/* webpackChunkName: "order-index" */ '../views/order/IndexView.vue'),
    props: true,
    children: [
      {
        path: ":serviceSlugs*",
        name: "order.create",
        component: () => import(/* webpackChunkName: "order-create" */ "../views/order/CreateView.vue"),
        props: true,
      },
      {
        path: "/:categorySlug/:serviceSlugs+/:form",
        name: "order.update",
        component: () => import(/* webpackChunkName: "order-update" */ "../views/order/UpdateView.vue"),
        props: true,
      },
    ],
  },
  {
    path: "/order/:orderId",
    name: "order.view",
    component: () => import(/* webpackChunkName: "order-view" */ "../views/OrderView.vue"),
    props: true,
  },
  {
    path: '/account',
    name: 'account',
    component: () => import(/* webpackChunkName: "account" */ '../views/AccountView.vue'),
    beforeEnter(to, from) {

      // if (!isAuthentificated.value)
      //   return false

    }
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
    path: '/:slug/services',
    name: 'services',
    component: () => import(/* webpackChunkName: "services" */ '../views/ServicesView.vue'),
    props: true,
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
    path: '/patent',
    name: 'patent',
    component: () => import(/* webpackChunkName: "patent" */ '../views/PatentView.vue'),
  },
  {
    path: '/termsofuse',
    name: 'termsofuse',
    component: () => import(/* webpackChunkName: "termsofuse" */ '../views/TermsOfUseView.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import(/* webpackChunkName: "404" */ '../views/NotFoundView.vue'),
    props: router => ({
      message: router.params.message,
      description: router.params.description,
    }),
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    document.getElementById('page').scrollIntoView();
  }
})

export default router
