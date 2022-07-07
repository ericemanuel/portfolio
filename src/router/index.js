import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import home from '../views/home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/portfolio/montehermom',
    name: 'montehermom',
    component: () => import('../views/montehermom.vue')
  },
  {
    path: '/portfolio/soul',
    name: 'soul',
    component: () => import('../views/soul.vue')
  },
  {
    path: '/portfolio/designsystem',
    name: 'designsystem',
    component: () => import('../views/designsystem.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {
      top: 0,
      behavior: 'smooth'
    }
  },
})

export default router
