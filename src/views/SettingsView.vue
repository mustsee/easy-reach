<script setup>
import SenderName from './../components/settings/SenderName.vue'
import Messages from './../components/settings/Messages.vue'
</script>

<template>
  <div class="my-8">
    <Suspense>
      <div class="grid grid-flow-row gap-6">
        <SenderName />
        <Messages />
      </div>
      <template #fallback>
        <div>loading...</div>
      </template>
    </Suspense>
  </div>
</template>
