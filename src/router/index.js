import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/home/Home'
import Detail from '@/pages/detail/Detail'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/city',
    name: 'City',
    component: () => import( /* webpackChunkName: "city" */ '@/pages/city/City')
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  }
]

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    // 始终滚动到顶部
    return {
      x: 0,
      y: 0
    }
  },
})

export default router