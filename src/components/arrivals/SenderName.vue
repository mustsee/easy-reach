<template>
  <div class="min-w-0 overflow-hidden bg-white">
    <div class="w-full sm:py-4 flex items-center">
      <div
        :class="`relative flex flex-1 text-base font-normal text-gray-700 ${
          removeBorder ? '' : 'border-2 border-gray-100'
        }`"
      >
        <select
          v-model="store.currentSenderName"
          class="appearance-none w-full py-2 pl-3 pr-10 bg-white focus:outline-none"
          name="senderName"
          id="senderName"
        >
          <option disabled>Sender name</option>
          <option v-for="senderName in store.senderNames" :value="senderName">
            {{ senderName }}
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

store.setCurrentSenderName(store.senderNames[0])

defineProps(['removeBorder'])
</script>
