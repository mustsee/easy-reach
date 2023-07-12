<template>
  <div class="min-w-0 overflow-hidden bg-white">
    <div class="p-4 flex items-center h-full">
      <div class="flex-1 flex items-center justify-center text-gray-500">
        <DateItem
          title="Previous date"
          :preventClick="preventPrevious"
          :increaseBy="-1"
          @increaseDate="handleDate"
        >
          <template #icon>
            <LeftTriangleIcon
              class="py-1 px-2 w-10 h-8 border bg-gray-100 rounded-md cursor-pointer hover:bg-gray-200 hover:text-gray-600"
            />
          </template>
        </DateItem>
        <p
          class="flex items-center justify-center text-sm sm:text-base text-center tracking-wider font-medium uppercase text-gray-500 px-2 sm:px-8 sm:w-96 select-none"
        >
          <span>{{ dateStore.displayDate }}</span>
          <span
            title="Update data"
            @click="handleUpdateData"
            :class="preventUpdate && 'prevent-click'"
          >
            <RefreshIcon class="py-1 px-2 w-10 h-8 cursor-pointer hover:text-gray-600" />
          </span>
        </p>
        <DateItem
          title="Next date"
          :preventClick="preventNext"
          :increaseBy="1"
          @increaseDate="handleDate"
        >
          <template #icon>
            <RightTriangleIcon
              class="py-1 px-2 w-10 h-8 border bg-gray-100 rounded-md cursor-pointer hover:bg-gray-200 hover:text-gray-600"
            />
          </template>
        </DateItem>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useDateStore } from '../../stores/DateStore'
import { useBookingsStore } from '../../stores/BookingsStore'

import DateItem from '../../components/reusable/DateItem.vue'
import LeftTriangleIcon from '../../assets/icons/LeftTriangle.vue'
import RightTriangleIcon from '../../assets/icons/RightTriangle.vue'
import RefreshIcon from '../../assets/icons/Refresh.vue'

const dateStore = useDateStore()
const bookingsStore = useBookingsStore()

const offSet = ref(0)
const minOffSet = -10
const maxOffSet = 10

const debounce = ref(false)
const debounceLoadData = ref(false)

const preventPrevious = computed(() => {
  return offSet.value <= minOffSet || debounce.value
})

const preventNext = computed(() => {
  return offSet.value >= maxOffSet || debounce.value
})

const preventUpdate = computed(() => {
  return !bookingsStore.getNumberOfGuests || debounceLoadData.value
})

const handleDate = (increaseBy) => {
  if (debounce.value) return
  debounce.value = true
  offSet.value = offSet.value + increaseBy
  dateStore.setCurrentDate(increaseBy)
  bookingsStore.loadGuestsData().finally(() => (debounce.value = false))
}

const handleUpdateData = () => {
  if (debounceLoadData.value) return
  debounceLoadData.value = true
  bookingsStore
    .writeGuestsData(true)
    .then((res) => {
      if (res.length > 0) bookingsStore.loadGuestsData()
    })
    .catch((error) => console.log('Error in handleUpdateData function: ', error)) // Unreachable code
  setTimeout(() => (debounceLoadData.value = false), 5000)
}
</script>
