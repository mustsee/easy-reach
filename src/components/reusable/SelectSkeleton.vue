<script setup>
import ArrowDownIcon from '../../assets/icons/ArrowDown.vue'
</script>

<template>
  <div class="relative border border-gray-200 text-gray-700 shadow-sm">
    <slot></slot>
    <div
      class="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-3 text-gray-700"
    >
      <ArrowDownIcon class="w-4 h-4" />
    </div>
  </div>
</template>
