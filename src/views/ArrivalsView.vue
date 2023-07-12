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
import NoGuests from '../components/guests/NoGuests.vue'
import GuestCard from '../components/guests/Card.vue'

const store = useBookingsStore()

const debounceLoadData = ref(false)

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
  store
    .loadGuestsData()
    // This piece of code is never reached, no error is thrown !
    .catch((error) => console.log('Error in loadData function: ', error))
}
</script>

<template>
  <ArrivalsMenu :bookings="store.getBookings" />
  <div v-if="!store.getNumberOfGuests">
    <NoGuests @writeData="writeData" :preventClick="debounceLoadData" />
  </div>
  <div v-else>
    <GuestCard v-for="booking in store.filteredBookings" :booking="booking" />
  </div>
</template>
