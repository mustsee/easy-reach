<script>
import { useArrivalsOptionsStore } from './../../stores/ArrivalsOptionsStore'
const store = useArrivalsOptionsStore()
store.setCurrentStatus(store.statuses[0].value)
</script>

<script setup>
import SelectSkeleton from '../reusable/SelectSkeleton.vue'
</script>

<template>
  <SelectSkeleton>
    <select
      v-model="store.currentStatus"
      class="appearance-none w-full py-2 pl-3 pr-10 bg-white focus:outline-none"
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
