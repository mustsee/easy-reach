<script setup>
import { ref } from 'vue'
import { Timestamp } from 'firebase/firestore'
import { queryByCollection, del, add } from '../../firebase/firestore'
import { useArrivalsOptionsStore } from './../../stores/ArrivalsOptionsStore'

const store = useArrivalsOptionsStore()

const senderName = ref('')
const docs = ref(await queryByCollection('senders', 'created_at'))

const deleteSender = async (id) => {
  del('senders', id)
  const senders = await queryByCollection('senders')
  docs.value = senders
  store.setSenders(senders)
}

const addSender = async () => {
  add('senders', { name: senderName.value, created_at: Timestamp.now() })
  const senders = await queryByCollection('senders', 'created_at')
  docs.value = senders
  store.setSenders(senders)
  senderName.value = ''
}
</script>

<template>
  <div class="text-xl mb-4">Sender Names</div>
  <table class="table-auto mb-4">
    <thead>
      <tr>
        <th class="font-medium border py-1 px-4">Name</th>
        <th class="font-medium border py-1 px-3">Delete</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="doc in docs">
        <td class="border py-1 px-4 text-center">{{ doc.name }}</td>
        <td
          @click="deleteSender(doc.id)"
          class="text-sm border hover:bg-gray-100 py-1 px-2 text-center cursor-pointer"
        >
          DEL
        </td>
      </tr>
    </tbody>
  </table>
  <div class="flex flex-wrap gap-4 mb-2">
    <input
      v-model="senderName"
      type="text"
      placeholder="Add sender name"
      class="py-2 px-4 border border-gray-200 rounded focus:shadow-md focus:outline-none"
    />
    <div>
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
        class="ml-4 bg-white hover:bg-gray-100 py-2 px-4 border border-gray-200 rounded w-24"
      >
        Cancel
      </button>
    </div>
  </div>
</template>
