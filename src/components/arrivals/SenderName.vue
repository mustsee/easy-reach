<script setup>
import { useArrivalsOptionsStore } from './../../stores/ArrivalsOptionsStore'
import { useBookingsStore } from '../../stores/BookingsStore';
import { queryByCollection } from '../../firebase/firestore'

const store = useArrivalsOptionsStore()
const bookingsStore = useBookingsStore()

defineProps(['removeBorder'])

let senders = await queryByCollection('senders', 'created_at')
await store.setSenders(senders.map((sender) => sender.name))

// Coming from /settings page, don't set again currentSender and lastSender if already set
if (store.senders.length && !store.currentSender) {
  store.setCurrentSender(store.senders[0])
  store.setLastSender(store.senders[0])
}

store.$subscribe((mutation, state) => {
  // if (mutation.events.key === 'currentSender') {
    bookingsStore.setSenderName(state.currentSender)
  //}
})
</script>

<template>
  <div class="min-w-0 overflow-hidden bg-white">
    <div class="w-full sm:py-4 flex items-center">
      <div
        :class="`relative flex flex-1 text-base font-normal text-gray-700 ${
          removeBorder ? '' : 'border-2 border-gray-100'
        }`"
      >
        <select
          v-model="store.currentSender"
          class="appearance-none w-full py-2 pl-3 pr-10 bg-white focus:outline-none"
          name="senderName"
          id="senderName"
        >
          <option disabled value="">Sender name</option>
          <option v-for="sender in store.senders" :value="sender">
            {{ sender }}
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
