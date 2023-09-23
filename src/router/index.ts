import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Config from '../views/Config.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/config',
      name: 'CONFIG',
      component: Config
    },
    {
      path: '/platform/:id',
      name: 'PLATFORM',
      component: () => Config
    },
    {
      path: '/add-platform',
      name: 'ADD_PLATFORM',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
