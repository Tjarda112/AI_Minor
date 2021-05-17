import Vue from 'vue'
import VueRouter from 'vue-router'
import Auth from '@/views/Auth-login.vue'
import AuthRegister from '@/views/Auth-register.vue'
import Home from '@/views/Home.vue'
import Camera from '@/views/Camera.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Auth-login',
    component: Auth
  },
  {
    path: '/register',
    name: 'Auth-register',
    component: AuthRegister
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/camera',
    name: 'Camera',
    component: Camera,
    props: {
      version: Home.version
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
