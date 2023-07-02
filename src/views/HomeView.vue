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
    <div>
      <button @click="signInWithGoogle">Sign in with Google</button>
    </div>
    <div>
      <button @click="logOut">Sign Out</button>
    </div>
  </main>
</template>
