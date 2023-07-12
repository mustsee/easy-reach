<script setup>
import { computed } from 'vue'
import { useMessagesStore } from '../../stores/MessagesStore'
import { useBookingsStore } from '../../stores/BookingsStore'
import SelectSkeleton from '../../components/reusable/SelectSkeleton.vue'

const props = defineProps(['bookId', 'messageType'])

const messagesStore = useMessagesStore()
const bookingsStore = useBookingsStore()

// TODO: Getters should be side-effect free (no async functions)
// https://vuejs.org/guide/essentials/computed.html#getters-should-be-side-effect-free
// I guess I should use a watcher here
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
  <SelectSkeleton>
    <select
      class="select"
      :name="'messages-' + bookId"
      :id="'messages-' + bookId"
      v-model="currentMessage"
    >
      <option v-for="message in messagesStore.messages" :value="message.messageType">
        {{ message.name }}
      </option>
    </select>
  </SelectSkeleton>
</template>
