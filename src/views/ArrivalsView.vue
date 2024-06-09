<script>
import CardLoader from '../components/guests/CardLoader.vue'
import { useDateStore } from '../stores/DateStore'
import { useBookingsStore } from './../stores/BookingsStore'
import { useClickCounterStore } from './../stores/clickCounterStore'

const dateStore = useDateStore()
const bookingsStore = useBookingsStore()
const clickCounterStore = useClickCounterStore()

// On first load, set date once
dateStore.setCurrentDate()

// Then get bookings[date]
bookingsStore.loadGuestsData()

clickCounterStore.log("data_firstLoad")
</script>

<script setup>
import ArrivalsMenu from '../components/arrivals/ArrivalsMenu.vue'
import NoGuests from '../components/guests/NoGuests.vue'
import GuestCard from '../components/guests/Card.vue'

const writeData = () => {
  clickCounterStore.log("data_mainLoad")
  bookingsStore.writeGuestsData().then((res) => {
    if (res?.length > 0) bookingsStore.loadGuestsData()
  })
}
</script>

<template>
  <ArrivalsMenu :bookings="bookingsStore.getBookings" />
  <CardLoader v-if="bookingsStore.isWritingData" />
  <div v-else-if="!bookingsStore.getNumberOfGuests && !bookingsStore.isLoadingData">
    <NoGuests @writeData="writeData" :preventClick="bookingsStore.isWritingData" />
  </div>
  <div v-else>
    <TransitionGroup name="cards">
      <GuestCard
        v-for="booking in bookingsStore.filteredBookings"
        :booking="booking"
        :key="booking.bookId"
      />
    </TransitionGroup>
  </div>
</template>

<style>
.cards-enter-active,
.cards-leave-active {
  transition: all 0.2s ease;
}
.cards-enter-from,
.cards-leave-to {
  opacity: 0.5;
  /* transform: translateX(15px); */
}
</style>
