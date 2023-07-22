import { createRouter, createWebHistory } from 'vue-router'

//トップページ
import HomeView from '../views/HomeView.vue'

//検索ページ
import SearchView from '../views/SearchView.vue'

//短答
import TantouTopView from '../views/Tantou/TopView.vue'
import TantouDetailView from '../views/Tantou/DetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //トップページ
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    //検索ページ
    {
      path: '/search',
      name: 'search',
      component: SearchView
    },
    //短答
    {
      path: '/tantou',
      name: 'tantouTop',
      component: TantouTopView
    },
    {
      path: '/tantou/:subject/:year/:qNum',
      name: 'tantou',
      component: TantouDetailView
    },
  ]
})

export default router
