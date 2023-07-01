<script setup>
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut
} from 'firebase/auth'
import { ref, onMounted } from 'vue'

const user = ref(null)

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider()
  signInWithPopup(getAuth(), provider)
    .then((result) => {
      user.value = result.user.displayName
    })
    .catch((error) => {
      console.log('error', error)
    })
}

const logOut = () => {
  signOut(getAuth())
    .then(() => {
      user.value = null
    })
    .catch((error) => console.log('error', error))
}

onMounted(() => {
  onAuthStateChanged(getAuth(), (client) => {
    if (client) {
      user.value = client.displayName
    } else {
      user.value = null
    }
  })
})
</script>

<template>
  <main>
    <button @click="signInWithGoogle">Sign in with Google</button>
    <div>User name : {{ user }}</div>
    <button @click="logOut">Sign Out</button>
  </main>
</template>
