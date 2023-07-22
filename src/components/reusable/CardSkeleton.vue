<script setup>
defineProps(['bookId'])
</script>

<template>
  <div class="status-card lg:flex-none">
    <div class="flex justify-end">
      <CancelIcon
        @click="$emit('updateBooking', bookId, { status: 'todo' })"
        title="Cancel"
        class="w-6 h-6 cursor-pointer"
      />
    </div>
    <slot></slot>
  </div>
</template>
