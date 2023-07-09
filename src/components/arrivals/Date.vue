<template>
  <div
    :class="`min-w-0 overflow-hidden ${removeBorder ? '' : 'border-2 border-gray-100'} bg-white`"
  >
    <div class="p-4 flex items-center h-full">
      <div class="flex-1 flex items-center justify-center text-gray-500">
        <span
          @click="handlePreviousDate"
          :class="[
            offSet > minOffSet ? '' : 'pointer-events-none opacity-50',
            debounce ? 'pointer-events-none opacity-50' : ''
          ]"
        >
          <svg
            fill="currentColor"
            class="py-1 px-2 w-10 h-8 border bg-gray-100 rounded-md cursor-pointer hover:bg-gray-200 hover:text-gray-600"
            viewBox="0 0 24 24"
          >
            <path
              d="m13.789 7.155c.141-.108.3-.157.456-.157.389 0 .755.306.755.749v8.501c0 .445-.367.75-.755.75-.157 0-.316-.05-.457-.159-1.554-1.203-4.199-3.252-5.498-4.258-.184-.142-.29-.36-.29-.592 0-.23.107-.449.291-.591 1.299-1.002 3.945-3.044 5.498-4.243z"
            />
          </svg>
        </span>
        <p
          class="flex items-center justify-center text-sm sm:text-base text-center tracking-wider font-medium uppercase text-gray-500 px-2 sm:px-8 sm:w-96 select-none"
        >
          <span>{{ store.displayDate }}</span>
          <!-- Find where is the best to put this button -->
          <span
            title="update Data"
            @click="handleLoadData"
            :class="[
              bookingsStore.getNumberOfGuests ? '' : 'pointer-events-none opacity-50',
              !debounceLoadData ? '' : 'pointer-events-none opacity-50'
            ]"
          >
            <svg
              fill="currentColor"
              class="py-1 px-2 w-10 h-8 cursor-pointer hover:text-gray-600"
              viewBox="0 0 24 24"
            >
              <path
                d="M20.944 12.979c-.489 4.509-4.306 8.021-8.944 8.021-2.698 0-5.112-1.194-6.763-3.075l1.245-1.633c1.283 1.645 3.276 2.708 5.518 2.708 3.526 0 6.444-2.624 6.923-6.021h-2.923l4-5.25 4 5.25h-3.056zm-15.864-1.979c.487-3.387 3.4-6 6.92-6 2.237 0 4.228 1.059 5.51 2.698l1.244-1.632c-1.65-1.876-4.061-3.066-6.754-3.066-4.632 0-8.443 3.501-8.941 8h-3.059l4 5.25 4-5.25h-2.92z"
              />
            </svg>
          </span>
        </p>
        <span
          @click="handleNextDate"
          :class="[
            offSet < maxOffSet ? '' : 'pointer-events-none opacity-50',
            debounce ? 'pointer-events-none opacity-50' : ''
          ]"
        >
          <svg
            fill="currentColor"
            class="py-1 px-2 w-10 h-8 border bg-gray-100 rounded-md cursor-pointer hover:bg-gray-200 hover:text-gray-600"
            viewBox="0 0 24 24"
          >
            <path
              d="m10.211 7.155c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591-1.299-1.002-3.945-3.044-5.498-4.243z"
            />
          </svg>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useDateStore } from '../../stores/DateStore'
import { useBookingsStore } from '../../stores/BookingsStore'

defineProps(['removeBorder'])

const store = useDateStore()
const bookingsStore = useBookingsStore()

const offSet = ref(0)
const minOffSet = -10
const maxOffSet = 10

const debounce = ref(false)
const debounceLoadData = ref(false)

let now = new Date()

if (!store.currentDate) {
  let currentDate = new Date(now.setDate(now.getDate() + 2))
  store.setCurrentDate(currentDate)
}

const handlePreviousDate = () => {
  if (debounce.value) return
  debounce.value = true
  offSet.value -= 1
  // Important to set the hour, if not, the setDate getDate functions remove 4hours every day...
  store.currentDate.setHours(12) // Important for debug purpose
  let currentDate = new Date(store.currentDate.setDate(store.currentDate.getDate() - 1))
  store.setCurrentDate(currentDate)
  bookingsStore.loadGuestsData().finally(() => (debounce.value = false))
}

const handleNextDate = () => {
  if (debounce.value) return
  debounce.value = true
  offSet.value += 1
  // Important to set the hour, if not, the setDate getDate functions remove 4hours every day...
  store.currentDate.setHours(12) // Important for debug purpose
  let currentDate = new Date(store.currentDate.setDate(store.currentDate.getDate() + 1))
  store.setCurrentDate(currentDate)
  bookingsStore.loadGuestsData().finally(() => (debounce.value = false))
}

const handleLoadData = () => {
  if (debounceLoadData.value) return
  debounceLoadData.value = true
  bookingsStore
    .writeGuestsData(true)
    .then((res) => {
      if (res.length > 0) bookingsStore.loadGuestsData()
    })
    .catch((error) => console.log('Error in handleLoadData function: ', error))
  setTimeout(() => (debounceLoadData.value = false), 5000)
}
</script>

<!-- TODO: Add refresh infos !! last update -->
