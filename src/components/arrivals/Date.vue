<template>
  <div class="min-w-0 overflow-hidden bg-white">
    <div class="p-4 flex items-center h-full">
      <div class="flex-1 flex items-center justify-center text-gray-500">
        <DateItem
          title="Previous date"
          :preventClick="bookingsStore.isLoadingData"
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
        <div>
          <div>
            <input class="focus:outline-none" type="date" name="calendar" id="calendar" :value="dateStore.fireStoreDate" @change="handleCalendar">
          </div>
          <div class="text-xs">{{ dateStore.displayDate }}</div>
        </div>
          <span
            title="Update data"
            @click="handleUpdateData"
            :class="[preventUpdate && 'prevent-click', 'sm:ml-4']"
          >
            <RefreshIcon class="py-1 px-2 w-10 h-8 cursor-pointer hover:text-gray-600" />
          </span>
        </p>
        <DateItem
          title="Next date"
          :preventClick="bookingsStore.isLoadingData"
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
import { useClickCounterStore } from '../../stores/clickCounterStore'

import DateItem from '../../components/reusable/DateItem.vue'

const dateStore = useDateStore()
const bookingsStore = useBookingsStore()
const clickCounterStore = useClickCounterStore()

/* const offSet = ref(0)
const minOffSet = -10
const maxOffSet = 10

const preventPrevious = computed(() => {
  return offSet.value <= minOffSet || bookingsStore.isLoadingData
})

const preventNext = computed(() => {
  return offSet.value >= maxOffSet || bookingsStore.isLoadingData
}) */

const preventUpdate = computed(() => {
  return !bookingsStore.getNumberOfGuests || bookingsStore.isWritingData
})

const handleDate = (increaseBy) => {
  // offSet.value = offSet.value + increaseBy
  clickCounterStore.log(increaseBy > 0 ? "date_next" : "date_previous")
  dateStore.setCurrentDate(increaseBy)
  bookingsStore.loadGuestsData()
}

const handleCalendar = (date) => {
  clickCounterStore.log("date_calendar")
  dateStore.setCurrentDateBis(date.target.value)
  bookingsStore.loadGuestsData()
}

const handleUpdateData = () => {
  clickCounterStore.log("date_updateData")
  bookingsStore.writeGuestsData(true).then((res) => {
    if (res?.length > 0) bookingsStore.loadGuestsData()
  })
}
</script>
