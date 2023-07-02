<script setup>
import { RouterView } from 'vue-router'
import HeaderMenu from './components/HeaderMenu.vue'
import FooterMenu from './components/FooterMenu.vue'
</script>

<template>
  <div class="flex flex-col h-screen justify-between text-slate-800">
    <header-menu />
    <main class="mb-auto bg-white">
      <div class="max-w-screen-xl mx-auto px-6 xl:px-0">
        <RouterView />
      </div>
    </main>
    <footer-menu />
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}
</style>
