<script setup>
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut
} from 'firebase/auth'
import { onMounted } from 'vue'
import router from "@/router";
import { useUserStore } from '../stores/UserStore'
import { isUserAuthorized } from '../firebase/firestore'

const store = useUserStore()

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider()
  signInWithPopup(getAuth(), provider)
    .then((result) => {
      isUserAuthorized(result.user.email)
        .then(() => {
          store.setUser(result.user)
          router.push({name: "Arrivals"});
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
