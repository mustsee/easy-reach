<script>
import { useArrivalsOptionsStore } from './../../stores/ArrivalsOptionsStore'
const store = useArrivalsOptionsStore()
store.setCurrentStatus(store.statuses[0].value)
</script>

<script setup>
import SelectSkeleton from '../reusable/SelectSkeleton.vue'
</script>

<template>
  <SelectSkeleton class="sm:my-4">
    <select
      v-model="store.currentStatus"
      class="select"
      name="status"
      id="status"
    >
      <option disabled>Status</option>
      <option v-for="status in store.statuses" :value="status.value">
        {{ status.displayName }}
      </option>
    </select>
  </SelectSkeleton>
</template>
