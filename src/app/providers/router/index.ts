import { createRouter, createWebHistory } from 'vue-router'
import { routes as commonRoutes } from '@/pages/common-pages'
import { routes as postRoutes } from '@/pages/post-pages'

export const routes = [
  ...commonRoutes,
  ...postRoutes
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
