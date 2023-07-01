import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// Why hash history
// https://stackoverflow.com/questions/65501787/vue-router-github-pages-and-custom-domain-not-working-with-routed-links?noredirect=1&lq=1
// https://stackoverflow.com/questions/48521177/404-when-reloading-a-vue-website-published-to-github-pages/65539760#65539760

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/arrivals',
      name: 'Arrivals',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ArrivalsView.vue')
    }
  ]
})

export default router
