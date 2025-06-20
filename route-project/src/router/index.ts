import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '@/views/LoginView.vue'
import DashboardView from '@/views/DashboardView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta:{
      requiresAuth: false // This route does not require authentication
    }
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta:{
      requiresAuth: false // This route does not require authentication
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta:{
      requiresAuth: false // This route does not require authentication
    }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView,
    meta:{
      requiresAuth: true, // This route requires authentication
      role: 'admin' // Example of a role-based access control
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next)=>{
  const auth = true; // Replace with actual authentication check logic
  const needAuth = to.matched.some(record => record.meta.requiresAuth);
  if (needAuth && !auth) {
    next({ name: 'login' }); // Redirect to login if authentication is required and not authenticated
  }
  else {
    next(); // Proceed to the route
  }
})

export default router
