<script setup>
import SenderName from './../components/settings/SenderName.vue'
</script>

<template>
  <div class="my-8">
    <Suspense>
      <SenderName />
      <template #fallback>
        <div>loading...</div>
      </template>
    </Suspense>
  </div>
</template>
