import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CreatePostView from '@/views/CreatePostView.vue'
import LoginView from '@/views/LoginView.vue'
import ProfileView from '@/views/ProfileView.vue'
import ExploreView from '@/views/ExploreView.vue'
import SginupForm from '@/components/LoginView/SginupForm.vue'
import { useAuthStore } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { requireAuth: false }
    },
    {
      path: '/createpost',
      name: 'createPost',
      component: CreatePostView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/sginup',
      name: 'Sginup',
      component: SginupForm
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView
    },
    {
      path: '/explore',
      name: 'explore',
      component: ExploreView
    }
  ]
})


router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()

  const isLoggedIn = localStorage.getItem('isLoggedIn') == 'true'
  const user = JSON.parse(localStorage.getItem('user') || 'null')

  authStore.setIsLoggedIn(isLoggedIn)
  authStore.setUser(user)
  
  next()
})

export default router
