<script setup>
import { ref } from 'vue'
import { Timestamp } from 'firebase/firestore'
import { queryByCollection, del, add } from '../../firebase/firestore'
import { useArrivalsOptionsStore } from './../../stores/ArrivalsOptionsStore'

const store = useArrivalsOptionsStore()

const senderName = ref('')
const docs = ref(await queryByCollection('senders'))

const deleteSender = async (id) => {
  del('senders', id)
  const senders = await queryByCollection('senders')
  docs.value = senders
  store.setSenders(senders)
}

const addSender = async () => {
  add('senders', { name: senderName.value, created_at: Timestamp.now() })
  const senders = await queryByCollection('senders')
  docs.value = senders
  store.setSenders(senders)
  senderName.value = ''
}
</script>

<template>
  <div class="text-xl mb-4">Sender Names</div>
  <table class="table-auto mb-4 w-96">
    <thead>
      <tr>
        <th class="font-medium border w-64 py-1">Name</th>
        <th class="font-medium border w-24 py-1">Delete</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="doc in docs">
        <td class="border py-1 text-center">{{ doc.name }}</td>
        <td
          @click="deleteSender(doc.id)"
          class="text-sm border hover:bg-gray-100 px-12 py-1 cursor-pointer"
        >
          DEL
        </td>
      </tr>
    </tbody>
  </table>
  <div class="flex gap-4 mb-2">
    <input
      v-model="senderName"
      type="text"
      placeholder="Add new sender name"
      class="py-2 px-4 border border-gray-200 rounded focus:shadow-md focus:outline-none"
    />
    <button
      @click="addSender"
      :class="`${
        !senderName && 'opacity-25 pointer-events-none'
      } bg-white hover:bg-gray-100 py-2 px-4 border border-gray-200 rounded w-24`"
    >
      Add
    </button>
    <button
      @click="senderName = ''"
      class="bg-white hover:bg-gray-100 py-2 px-4 border border-gray-200 rounded w-24"
    >
      Cancel
    </button>
  </div>
</template>
