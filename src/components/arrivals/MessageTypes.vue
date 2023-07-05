<template>
  <div class="min-w-0 overflow-hidden bg-white">
    <div class="w-full sm:py-4 flex items-center">
      <div
        :class="`flex flex-1 relative text-gray-700 bg-white ${
          removeBorder ? '' : 'border-2 border-gray-100'
        }`"
      >
        <select
          v-model="store.currentTypeFilter"
          class="appearance-none w-full py-2 pl-3 pr-10 bg-white focus:outline-none"
          name="type"
          id="type"
        >
          <option disabled>Message type</option>
          <option v-for="typeFilter in store.typeFilters" :value="typeFilter.value">
            {{ typeFilter.displayName }}
          </option>
        </select>
        <div
          class="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-3 text-gray-700"
        >
          <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useArrivalsOptionsStore } from './../../stores/ArrivalsOptionsStore'

const store = useArrivalsOptionsStore()

if (!store.currentTypeFilter) {
  store.setCurrentTypeFilter(store.typeFilters[0].value)
}

defineProps(['removeBorder'])
</script>
