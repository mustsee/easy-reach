<script setup>
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import { onMounted } from 'vue'
import router from '@/router'
import { useUserStore } from '../stores/UserStore'
import { fireAuth } from '../firebase/setup'
import { isUserAuthorized } from '../firebase/firestore'

const store = useUserStore()

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider()
  signInWithPopup(fireAuth, provider)
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
  signOut(fireAuth)
    .then(() => {
      store.setUser(null)
    })
    .catch((error) => console.log('error', error))
}

onMounted(() => {
  onAuthStateChanged(fireAuth, (user) => {
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
    <div>
      <button @click="signInWithGoogle">Sign in with Google</button>
    </div>
    <div>
      <button @click="logOut">Sign Out</button>
    </div>
  </main>
</template>
