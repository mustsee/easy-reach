<script setup>
import { useArrivalsOptionsStore } from './../../stores/ArrivalsOptionsStore'
import { useBookingsStore } from '../../stores/BookingsStore'
import { queryByCollection } from '../../firebase/firestore'
import SelectSkeleton from '../reusable/SelectSkeleton.vue'

const store = useArrivalsOptionsStore()
const bookingsStore = useBookingsStore()

let senders = await queryByCollection('senders', 'created_at')
store.setSenders(senders.map((sender) => sender.name))

// Coming from /settings page, don't set again currentSender and lastSender if already set
// Buggy...
/* if (store.senders.length && !store.currentSender) {
  store.setCurrentSender(store.senders[0])
  store.setLastSender(store.senders[0])
} */

store.$subscribe((mutation, state) => {
  // The bug fix works but it fires a lot !
  // if (mutation.events.key === 'currentSender') { // This doesn't work on prod, don't know why
  if (state.currentSender) {
    // Bug: Don't update sender name if state change with not sender name selected
    bookingsStore.setSenderName(state.currentSender)
  }
  //}
})
</script>

<template>
  <SelectSkeleton>
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
  </SelectSkeleton>
</template>
