<script>
import { useArrivalsOptionsStore } from './../../stores/ArrivalsOptionsStore'
import { useClickCounterStore } from './../../stores/clickCounterStore'

const store = useArrivalsOptionsStore()
store.setCurrentTypeFilter(store.typeFilters[0].value)
const clickCounterStore = useClickCounterStore()

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
      @click="clickCounterStore.log('filter_type')"
    >
      <option disabled>Type</option>
      <option v-for="typeFilter in store.typeFilters" :value="typeFilter.value">
        {{ typeFilter.displayName }}
      </option>
    </select>
  </SelectSkeleton>
</template>
