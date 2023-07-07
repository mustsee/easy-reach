<script setup>
import router from '@/router'
import { getAuth, signOut } from 'firebase/auth'
import { useUserStore } from '../stores/UserStore'
import { useRoute } from 'vue-router'

const route = useRoute()

const isActiveRoute = (path) => {
  if (route.path === path) return 'bg-gray-600'
  return ''
}

const isNotHomepage = () => {
  if (route.path === '/arrivals' || route.path === '/settings') return true
  return false
}

const store = useUserStore()

const logOut = () => {
  signOut(getAuth())
    .then(() => {
      store.setUser(null)
    })
    .catch((error) => console.log('error', error))
    .finally(() => router.push('/'))
}
</script>

<template>
  <header class="border-b border-gray-200 bg-gray-900">
    <div class="max-w-screen-xl flex justify-between mx-auto px-6 xl:px-0">
      <div class="logo flex items-center">
        <div
          class="truncate text-white font-medium border-l-4 border-gray-500 transition hover:text-gray-100 my-4 px-3 py-1"
        >
          <span class="sm:hidden"> ER </span>
          <span class="hidden sm:block">Easy Reach</span>
        </div>
        <!-- <router-link
          to="/"
          class="truncate text-white font-medium border-l-4 border-gray-500 transition hover:text-gray-100 my-4 px-3 py-1"
        >
          Easy Reach
        </router-link> -->
      </div>
      <div v-if="store.user && isNotHomepage" class="flex items-center gap-4">
        <router-link
          to="/arrivals"
          :class="`sm:w-28 py-1.5 px-2 text-center text-sm text-white sm:border sm:border-gray-100 ${isActiveRoute(
            '/arrivals'
          )}`"
          >ARRIVALS</router-link
        >
        <router-link
          to="/settings"
          :class="`sm:w-28 py-1.5 px-2 text-center text-sm text-white sm:border sm:border-gray-100 ${isActiveRoute(
            '/settings'
          )}`"
          >SETTINGS</router-link
        >
      </div>
      <div
        v-if="store.user"
        @click="logOut"
        class="hidden sm:flex text-white items-center px-4 cursor-pointer hover:text-gray-100"
      >
        Sign out
      </div>
      <div
        v-if="store.user"
        @click="logOut"
        class="w-12 flex sm:hidden text-white items-center px-4 cursor-pointer hover:text-gray-100"
      >
        <img src="/logout.png" alt="Logout icon" />
      </div>
    </div>
  </header>
</template>
