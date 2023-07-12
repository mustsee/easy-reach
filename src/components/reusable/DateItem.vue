<template>
  <span
    :title="title"
    @click="$emit('increaseDate', increaseBy)"
    :class="[preventClick && 'prevent-click']"
  >
    <slot name="icon"></slot>
  </span>
</template>

<script setup>
defineProps(['title', 'preventClick', 'increaseBy'])
</script>
