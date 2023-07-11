<template>
  <div class="min-w-0 overflow-hidden shadow-md bg-white border-t-4 border-blue-500">
    <div class="p-4 flex items-center">
      <div data-cy="icon" class="p-3 rounded-full text-blue-500 bg-blue-100 mr-4">
        <slot name="icon"></slot>
      </div>
      <div>
        <p data-cy="title" class="mb-2 text-sm font-normal text-gray-600">{{ title }}</p>
        <p data-cy="data" class="text-base font-normal text-gray-700">
          <slot name="data"></slot>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(['title'])
</script>
