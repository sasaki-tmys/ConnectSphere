import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CreatePostView from '@/views/CreatePostView.vue'
import LoginView from '@/views/LoginView.vue'
import ProfileView from '@/views/ProfileView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/createpost',
      name: 'createPost',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: HomeView
    },
    {
      path: '/profile',
      name: 'profile',
      component: HomeView
    }
  ]
})

export default router
