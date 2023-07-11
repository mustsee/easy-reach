<script setup>
import { onMounted, ref } from 'vue'
import { useBookingsStore } from './../stores/BookingsStore'
import ArrivalsMenu from './../components/arrivals/ArrivalsMenu.vue'
import GuestCard from './../components/guests/Card.vue'

const store = useBookingsStore()

onMounted(() => {
  // I think it doesn't work, it reloads anyway
  if (!store.getBookings) {
    // When we come /settings page, don't load data a second time
    loadData()
  }
})

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
      title="Upload data"
    >
      <svg
        fill="currentColor"
        class="my-2 py-9 px-4 w-24 h-24 border bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 hover:text-gray-600"
        viewBox="0 0 24 24"
      >
        <path d="M12 21l-8-9h6v-12h4v12h6l-8 9zm9-1v2h-18v-2h-2v4h22v-4h-2z" />
      </svg>
    </span>
  </div>
  <div v-else>
    <guest-card v-for="booking in store.filteredBookings" :booking="booking" />
  </div>
</template>
