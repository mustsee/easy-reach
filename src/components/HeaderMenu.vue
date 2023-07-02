<script setup>
import router from '@/router'
import { getAuth, signOut } from 'firebase/auth'
import { useUserStore } from '../stores/UserStore'

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
        <router-link
          to="/"
          class="truncate text-white font-medium border-l-4 border-gray-500 transition hover:text-gray-100 my-4 px-3 py-1"
        >
          Easy Reach
        </router-link>
      </div>
      <div
        v-if="store.user"
        @click="logOut"
        class="text-white text-lg flex items-center px-4 cursor-pointer hover:text-gray-100"
      >
        Sign out
      </div>
    </div>
  </header>
</template>
