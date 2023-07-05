<script setup>
import { computed } from 'vue'
import { useMessagesStore } from '../../stores/MessagesStore'
import { useBookingsStore } from '../../stores/BookingsStore'

const props = defineProps(['bookId', 'messageType' ])

const messagesStore = useMessagesStore()
const bookingsStore = useBookingsStore()

const currentMessage = computed({
  get() {
    return props.messageType
  },
  set(newValue) {
    bookingsStore.setMessage(props.bookId, newValue)
  }
})
</script>

<template>
  <div class="relative border border-gray-300 text-gray-800 bg-white shadow-md">
    <select
      class="appearance-none w-full py-1 px-2 bg-white focus:outline-none"
      :name="'messages-' + bookId"
      :id="'messages-' + bookId"
      v-model="currentMessage"
    >
      <option v-for="message in messagesStore.messages" :value="message.messageType">
        {{ message.name }}
      </option>
    </select>
    <div
      class="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700 border-l border-gray-300"
    >
      <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
      </svg>
    </div>
  </div>
</template>

<style>
/* https://codepen.io/croxton/pen/zYqYdKr */
</style>
