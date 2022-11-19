import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CouList from '@/components/CouList.vue'
import CouPuls from '@/components/CouPuls.vue'
import Setting from '@/components/Setting.vue'
import About from '@/components/About.vue'
import PersonalCenter from '@/components/PersonalCenter.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path:"/list",
    name:"list",
    component: CouList
  },
  {
    path:"/puls",
    name:"puls",
    component: CouPuls
  },
  {
    path:"/personalCenter",
    name:"personalCenter",
    component: PersonalCenter
  },
  {
    path:"/setting",
    name:"setting",
    component: Setting
  }
]

const router = new VueRouter({
  routes
})

export default router
