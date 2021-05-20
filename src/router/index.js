import { createRouter, createWebHashHistory } from "vue-router"

import Index from '../views/index.vue'
import IconShine from '../views/000.icon-shine.vue'

const routes = [
  { path: '/', component: Index },
  { path: '/iconShine', component: IconShine }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})


export default router
