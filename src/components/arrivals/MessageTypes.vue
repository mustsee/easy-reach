<script>
import { useArrivalsOptionsStore } from './../../stores/ArrivalsOptionsStore'
const store = useArrivalsOptionsStore()
store.setCurrentTypeFilter(store.typeFilters[0].value)
</script>

<script setup>
import SelectSkeleton from '../reusable/SelectSkeleton.vue'
</script>

<template>
  <SelectSkeleton>
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
  </SelectSkeleton>
</template>
