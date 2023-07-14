<script>
import CardLoader from '../components/guests/CardLoader.vue'
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
import ArrivalsMenu from '../components/arrivals/ArrivalsMenu.vue'
import NoGuests from '../components/guests/NoGuests.vue'
import GuestCard from '../components/guests/Card.vue'

const writeData = () => {
  bookingsStore.writeGuestsData().then((res) => {
    if (res.length > 0) bookingsStore.loadGuestsData()
  })
}
</script>

<template>
  <ArrivalsMenu :bookings="bookingsStore.getBookings" />
  <CardLoader v-if="bookingsStore.isWritingData" />
  <div v-else-if="(!bookingsStore.getNumberOfGuests && !bookingsStore.isLoadingData)">
    <NoGuests @writeData="writeData" :preventClick="bookingsStore.isWritingData" />
  </div>
  <div v-else>
    <GuestCard v-for="booking in bookingsStore.filteredBookings" :booking="booking" />
  </div>
</template>
