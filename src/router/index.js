import { createRouter, createWebHistory } from 'vue-router'

//トップページ
import HomeView from '../views/HomeView.vue'

//検索ページ
import SearchView from '../views/SearchView.vue'

//判例検索ページ
import HanreiView from '../views/HanreiView.vue'


//短答
import TantouTopView from '../views/Tantou/TopView.vue'
import TantouDetailView from '../views/Tantou/DetailView.vue'
import RandomView from '../views/Tantou/RandomView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //トップページ
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    //短答問題検索ページ
    {
      path: '/search',
      name: 'search',
      component: SearchView
    },
    //判例検索ページ
    {
      path: '/hanrei',
      name: 'hanrei',
      component: HanreiView
    },
    {
      path: '/hanrei/:text',
      name: 'hanreitext',
      component: HanreiView
    },
    //ランダム出題
    {
      path: '/random',
      name: 'random',
      component: RandomView
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
