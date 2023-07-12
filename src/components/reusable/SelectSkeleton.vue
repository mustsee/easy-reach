<script setup>
import ArrowDownIcon from '../../assets/icons/ArrowDown.vue'
</script>

<template>
  <div class="min-w-0 overflow-hidden bg-white">
    <div class="w-full sm:py-4 flex items-center">
      <div class="flex flex-1 relative text-gray-700 bg-white border-2 border-gray-100">
        <slot></slot>
        <div
          class="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-3 text-gray-700"
        >
          <ArrowDownIcon class="w-4 h-4" />
        </div>
      </div>
    </div>
  </div>
</template>
