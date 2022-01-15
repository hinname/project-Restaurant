import { createRouter, createWebHistory } from 'vue-router';


const routes = [
  {
    path: '/:pathMatch(.*)*', 
    name: 'NotFound', 
    component: () => import(/* webpackChunkName: "NotFound" */'./views/NotFound.vue')
  },

  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "Home" */'./views/Home.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "About" */'./views/About.vue')
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import(/* webpackChunkName: "Setiings" */'./views/Settings.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router