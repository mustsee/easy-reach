<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="text-3xl font-bold underline">Easy Reach</div>
    <div></div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
}
</style>
