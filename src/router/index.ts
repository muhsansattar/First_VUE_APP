import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/app',
      name: 'app',
      component: () => import('../views/AppView.vue'),
      children: [
        { path: '', component: () => import('../components/app/AppHome.vue') },
        { path: 'weather', component: () => import('../components/app/WeatherContent.vue') },
        { path: 'to-do', component: () => import('../components/app/TodoContent.vue')  },
        { path: 'my-notes', component: () => import('../components/app/NotesContent.vue') },
        { path: 'chat', component: () => import('../components/app/ChatContent.vue') },
      ],
    },
  ]
})

export default router
