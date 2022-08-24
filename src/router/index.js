import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Contact from '@/views/ContactView.vue'
import Products from '@/views/ProductsView.vue'
import DetailsProduct from '@/views/DetailsProductView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/produits/:idproduits',
      name: 'details',
      component: DetailsProduct
    },
    {
      path: '/contact',
      component: Contact,
      name:'contact'
    },
    {
      path: '/produits',
      component: Products,
      name:'produits'
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
