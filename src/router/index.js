import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/dashboard/home',
      name: 'home',
      component: () => import('@/views/dashboard/home.vue')
    },
  ],
})

export default router
