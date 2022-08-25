import { createRouter, createWebHistory } from 'vue-router'
// intégration des composants de type "views"
import HomeView from '../views/HomeView.vue'
import Contact from '@/views/ContactView.vue'
import Products from '@/views/ProductsView.vue'
import DetailsProduct from '@/views/DetailsProductView.vue'
//défintion du router
const router = createRouter({
  // activation de l'history dans le navigateur
  history: createWebHistory(import.meta.env.BASE_URL),
  // définition des rooutes
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    // route dynamique avec le paramètre "idproduits"
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
