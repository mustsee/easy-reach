<script>
import { useArrivalsOptionsStore } from './../../stores/ArrivalsOptionsStore'
const store = useArrivalsOptionsStore()
store.setCurrentTypeFilter(store.typeFilters[0].value)
</script>

<script setup>
import SelectSkeleton from '../reusable/SelectSkeleton.vue'
</script>

<template>
  <SelectSkeleton class="sm:my-4">
    <select
      v-model="store.currentTypeFilter"
      class="select"
      name="type"
      id="type"
    >
      <option disabled>Type</option>
      <option v-for="typeFilter in store.typeFilters" :value="typeFilter.value">
        {{ typeFilter.displayName }}
      </option>
    </select>
  </SelectSkeleton>
</template>
