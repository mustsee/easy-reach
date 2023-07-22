<script setup>
import { computed, onMounted, ref } from 'vue'
import { queryByCollection } from '../../firebase/firestore'
import { useMessagesStore } from '../../stores/MessagesStore'
import { useBookingsStore } from '../../stores/BookingsStore'
import SelectSkeleton from '../../components/reusable/SelectSkeleton.vue'

const props = defineProps(['bookId', 'messageType'])

const messagesStore = useMessagesStore()
const bookingsStore = useBookingsStore()
const customMessages = ref()

onMounted(async () => {
  customMessages.value = await queryByCollection('messages', 'created_at')
  messagesStore.setCustomMessages(customMessages.value)
})

// TODO: Getters should be side-effect free (no async functions)
// https://vuejs.org/guide/essentials/computed.html#getters-should-be-side-effect-free
// I guess I should use a watcher here
const currentMessage = computed({
  get() {
    return props.messageType
  },
  set(newValue) {
    if (newValue.includes('custom-')) {
      bookingsStore.setCustomMessage(props.bookId, newValue.replace('custom-', ''))
    } else {
      bookingsStore.setMessage(props.bookId, newValue)
    }
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
      <optgroup label="Premade">
        <option v-for="message in messagesStore.messages" :value="message.messageType">
          {{ message.name }}
        </option>
      </optgroup>
      <optgroup label="Custom">
        <option v-for="message in customMessages" :value="`custom-${message.messageType}`">
          {{ message.name }}
        </option>
      </optgroup>
    </select>
  </SelectSkeleton>
</template>
