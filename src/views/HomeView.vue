<script setup>
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import router from '@/router'
import { useUserStore } from '../stores/UserStore'
import { getAuth } from 'firebase/auth'
import { isUserAuthorized } from '../firebase/firestore'

const store = useUserStore()

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider()
  signInWithPopup(getAuth(), provider)
    .then((result) => {
      isUserAuthorized(result.user.email)
        .then(() => {
          store.setUser(result.user)
          router.push({ name: 'Arrivals' })
        })
        .catch((error) => {
          console.log(error.message)
          logOut()
        })
    })
    .catch((error) => {
      console.log('error', error)
    })
}

const logOut = () => {
  signOut(getAuth())
    .then(() => {
      store.setUser(null)
    })
    .catch((error) => console.log('error', error))
}
</script>

<template>
  <main>
    <div class="flex justify-center mt-20">
      <button
        @click="signInWithGoogle"
        class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
      >
        Sign in with Google
      </button>
    </div>
  </main>
</template>
