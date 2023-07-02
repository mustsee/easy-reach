import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useUserStore } from '../stores/UserStore'

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
      component: () => import('../views/ArrivalsView.vue'),
      meta: {
        requiresAuth: true
      }
    }
  ]
})


// https://www.youtube.com/watch?v=xceR7mrrXsA&t=473s&ab_channel=LearnVue
// https://github.com/vuejs/vuefire/issues/18
const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const store = useUserStore()
    onAuthStateChanged(
      getAuth(),
      (user) => {
        if (user) {
          store.setUser(user)
          resolve(user)
        } else {
          store.setUser(null)
          reject('User not logged in')
        }
      },
    )
  })
}

// https://www.youtube.com/watch?v=xceR7mrrXsA&t=473s&ab_channel=LearnVue
router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    try {
      await getCurrentUser()
      next()
    } catch (error) {
      console.log(error)
      next('/')
    }
  } else {
    next()
  }
})

export default router
