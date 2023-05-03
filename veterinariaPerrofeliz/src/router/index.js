import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      id:1,
      name: 'home',
      component: HomeView,
      meta:{
        id:1,
      }
    },
    {
      path: '/about',
      id:2,
      name: 'about',
      meta:{
        id:2,
      },
      component: () => import('../views/About.vue')
    },
    {
      path: '/services',
      id:3,
      name: 'services',
      meta:{
        id:3,
      },
      component: () => import('../views/Services.vue')
    },
    {
      path: '/doctors',
      id:4,
      name: 'doctors',
      meta:{
        id:4,
      },
      component: () => import('../views/Doctors.vue')
    },
    {
      path: '/contact',
      id:5,
      name: 'contact',
      meta:{
        id:5,
      },
      component: () => import('../views/Contact.vue')
    }
    ,
    {
      path: '/homework',
      id:6,
      name: 'homework',
      meta:{
        id:6,
      },
      component: () => import('../views/Homework.vue')
    }
  ]
})

export default router
