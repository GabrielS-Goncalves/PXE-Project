import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth/useAuthStore'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/auth/login',
      name: 'login',
      component: () => import('@/views/auth/login.vue'),
      meta: { requiresAuth: false } // Público
    },
    {
      path: '/dashboard/home',
      name: 'home',
      component: () => import('@/views/dashboard/home.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/administration/logs',
      name: 'logs',
      component: () => import('@/views/administration/logs.vue'),
      meta: { requiresAuth: true }
    }
  ],
})

// Navigation Guard
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  const requiresAuth = to.meta.requiresAuth !== false

  if (requiresAuth && !authStore.isAuthenticated) {
    next({ name: 'Login', query: {redirect: to.fullPath}}) // Redireciona para login, salvando a rota de destino
  } else if (to.name === 'login' && authStore.isAuthenticated) {
    next({ name: 'Home'}) // Se já logado, não deixa voltar para o login
  } else {
    next()
  }
})

export default router
