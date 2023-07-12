<template>
  <div class="flex flex-col mb-12 justify-center items-center text-gray-500">
    <span class="my-8 text-xl font-semi-bold">NO DATA</span>
    <span @click="$emit('writeData')" :class="preventClick && 'prevent-click'" title="Load data">
      <LoadIcon
        class="my-2 py-9 px-4 w-24 h-24 border bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 hover:text-gray-600"
      />
    </span>
  </div>
</template>

<script setup>
defineProps(['preventClick'])
</script>