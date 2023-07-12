<script>
import { useDateStore } from '../stores/DateStore'
import { useBookingsStore } from './../stores/BookingsStore'

const dateStore = useDateStore()
const bookingsStore = useBookingsStore()

// On first load, set date once
dateStore.setCurrentDate()

// Then get bookings[date]
bookingsStore.loadGuestsData()
</script>

<script setup>
import { ref } from 'vue'
import { useBookingsStore } from './../stores/BookingsStore'
import ArrivalsMenu from '../components/arrivals/ArrivalsMenu.vue'
import GuestCard from '../components/guests/Card.vue'
import LoadIcon from '../assets/icons/Load.vue'

const store = useBookingsStore()

const debounceLoadData = ref(false)
const debounce = ref(false)

const writeData = () => {
  if (debounceLoadData.value) return
  debounceLoadData.value = true
  store
    .writeGuestsData()
    .then((res) => {
      if (res.length > 0) loadData()
    })
    .catch((error) => console.log('Error in writeData function: ', error))
  setTimeout(() => (debounceLoadData.value = false), 5000)
}

const loadData = () => {
  if (debounce.value) return
  debounce.value = true
  store
    .loadGuestsData()
    // This piece of code is never reached, no error is thrown !
    .catch((error) => console.log('Error in loadData function: ', error))
    .finally(() => (debounce.value = false))
}
</script>

<template>
  <arrivals-menu :bookings="store.getBookings" />
  <div
    v-if="!store.getNumberOfGuests"
    class="flex flex-col mb-12 justify-center items-center text-gray-500"
  >
    <span class="my-8 text-xl font-semi-bold">NO DATA</span>
    <span
      @click="writeData"
      :class="!debounceLoadData ? '' : 'pointer-events-none opacity-50'"
      title="Load data"
    >
      <LoadIcon
        class="my-2 py-9 px-4 w-24 h-24 border bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 hover:text-gray-600"
      />
    </span>
  </div>
  <div v-else>
    <guest-card v-for="booking in store.filteredBookings" :booking="booking" />
  </div>
</template>
