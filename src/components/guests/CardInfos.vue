<script setup>
import { ref } from 'vue'
import { useBookingsStore } from '../../stores/BookingsStore'

const bookingsStore = useBookingsStore()

const props = defineProps(['booking'])

const displayInput = ref(false)
const arrivalTimeText = ref(props.booking.arrivalTime)

const handleDisplayInput = () => {
  displayInput.value = true
  arrivalTimeText.value = props.booking.arrivalTime
}

const handleCloseInput = () => {
  displayInput.value = false
  arrivalTimeText.value = props.booking.arrivalTime
}

const handleSaveArrivalTime = async () => {
  // bookingsStore.updateBooking(booking.bookId, { arrivalTime: arrivalTimeText.value })
  try {
    await bookingsStore.updateArrivalTimeSectionEdit(props.booking.bookId, arrivalTimeText.value)
  } finally {
    // arrivalTimeText.value = ''
    displayInput.value = false
  }
}
</script>

<template>
  <div class="flex-1 px-6 py-8 bg-white lg:p-12">
    <h3 class="text-2xl font-extrabold text-gray-900 sm:text-3xl">{{ booking.name }}</h3>
    <p class="mt-6 text-base text-gray-500 truncate">
      <span v-if="booking.groupReservation">(group of {{ booking.personsInGroup }})<br /></span>
      {{ booking.phone ? booking.phone : 'No phone' }} <br />
      {{ booking.email ? booking.email : 'No email' }}
    </p>
    <div class="mt-8">
      <div class="flex items-center">
        <h4 class="flex-shrink-0 pr-4 text-sm font-semibold tracking-wider uppercase bg-white">
          Guest infos
        </h4>
        <div class="flex-1 border-t-2 border-gray-200"></div>
      </div>
      <ul class="mt-8 space-y-5">
        <li class="lg:col-span-1">
          <div class="flex items-center">
            <p class="text-gray-900">Arrival time</p>
            <div v-if="!displayInput">
              <EditIcon
                @click="handleDisplayInput"
                class="ml-2 h-3 w-3 cursor-pointer"
                title="Edit Arrival time section in Beds24"
              />
            </div>
          </div>
          <p v-if="!displayInput" class="text-sm text-gray-700">
            {{ booking.arrivalTime ? booking.arrivalTime : 'No data' }}
          </p>
          <div v-else>
            <input
              v-model="arrivalTimeText"
              type="text"
              spellcheck="false"
              placeholder="Update Arrival time text"
              class="mt-2 text-sm px-4 py-1 border border-gray-200 rounded-sm focus:shadow-md focus:outline-none mb-2"
            />
            <div class="flex gap-4">
              <button
                @click="handleSaveArrivalTime"
                class="text-sm py-1 bg-white hover:bg-gray-100 border border-gray-200 rounded-sm w-20"
              >
                Save
              </button>
              <button
                @click="handleCloseInput"
                class="text-sm py-1 bg-white hover:bg-gray-100 border border-gray-200 rounded-sm w-20"
              >
                Cancel
              </button>
            </div>
          </div>
        </li>
        <li class="lg:col-span-1">
          <p class="text-gray-900">Comments</p>
          <p
            class="text-sm text-gray-700"
            v-html="`${booking.guestCommentsModified ? booking.guestCommentsModified : 'No data'}`"
          ></p>
        </li>
      </ul>
    </div>
  </div>
</template>
