import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      id:1,
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      id:2,
      name: 'about',
      component: () => import('../views/About.vue')
    },
    {
      path: '/services',
      id:3,
      name: 'services',
      component: () => import('../views/Services.vue')
    },
    {
      path: '/contact',
      id:4,
      name: 'contact',
      component: () => import('../views/Contact.vue')
    }
  ]
})

export default router
