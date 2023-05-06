import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TantouView from '../views/TantouView.vue'
import TantouTopView from '../views/TantouTopView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/tantou',
      name: 'tantouTop',
      component: TantouTopView
    },
    {
      path: '/tantou/:subject/:qNum',
      name: 'tantou',
      component: TantouView
    },
  ]
})

export default router
