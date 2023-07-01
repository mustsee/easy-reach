<script setup>
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut
} from 'firebase/auth'
import { onMounted } from 'vue'
import { useUserStore } from '../stores/UserStore'

const store = useUserStore()

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider()
  signInWithPopup(getAuth(), provider)
    .then((result) => {
      store.setUser(result.user)
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

onMounted(() => {
  onAuthStateChanged(getAuth(), (user) => {
    if (user) {
      store.setUser(user)
    } else {
      store.setUser(null)
    }
  })
})
</script>

<template>
  <main>
    <button @click="signInWithGoogle">Sign in with Google</button>
    <div>User : {{ store.user && store.userEmail }}</div>
    <button @click="logOut">Sign Out</button>
  </main>
</template>
