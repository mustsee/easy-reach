<script setup>
import { computed, onMounted, ref } from 'vue'
import { useBookingsStore } from '../../stores/BookingsStore'
import { useMessagesStore } from '../../stores/MessagesStore'

import MessageType from './MessageType.vue'
import Text from './Text.vue'

const bookingsStore = useBookingsStore()
const messagesStore = useMessagesStore()

const props = defineProps(['booking'])

onMounted(() => {
  // bookingsStore.setMessage(props.booking.bookId, props.booking.messageType)
})

const getWhatsAppLink = computed(() => {
  // https://web.whatsapp.com/send?phone=whatsappphonenumber&text=urlencodedtext
  let encodedText = encodeURI(props.booking.text) // TODO: Change that
  return `https://web.whatsapp.com/send?phone=${props.booking.phone}&text=${encodedText}`
})

const sendEmail = (booking) => {
  bookingsStore.sendEmail(booking)
}

const updateBooking = (bookId, value) => {
  bookingsStore.updateBooking(bookId, value)
}

const updateArrivalTimeSection = (booking, value) => {
  // updateBooking call two times ? A second time in updateArrivalTimeSection
  bookingsStore.updateBooking(booking.bookId, value)
  bookingsStore.updateArrivalTimeSection(booking.bookId, booking.type, booking.arrivalTime)
}

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

<style>
/* https://codepen.io/stackdiary/pen/xxPRLjV */
</style>

<template>
  <div class="pb-6">
    <div class="shadow-md lg:flex">
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
          <!-- <ul class="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5"> -->
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
                v-html="
                  `${booking.guestCommentsModified ? booking.guestCommentsModified : 'No data'}`
                "
              ></p>
            </li>
          </ul>
        </div>
      </div>
      <div
        v-if="booking.status === 'todo'"
        class="lg:w-3/5 px-6 py-8 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12"
      >
        <MessageType :bookId="booking.bookId" :messageType="booking.messageType" />
        <Text :bookId="booking.bookId" :text="booking.text" class="mt-6" />
        <div class="mt-8">
          <div
            v-if="booking.type === 'email'"
            class="action-button rounded-md shadow cursor-pointer"
            @click="sendEmail(booking)"
            :class="[
              bookingsStore.isSendingMail ? 'pointer-events-none opacity-50' : '',
              'flex items-center justify-center w-full px-5 py-3 text-base font-medium text-red-600 border border-red-600 bg-white rounded-md hover:bg-red-200 transition-all'
            ]"
          >
            Send email
            <EmailLightIcon class="w-6 h-6 ml-2" />
          </div>
          <div v-if="booking.type === 'whatsapp'" class="action-button rounded-md shadow">
            <a
              @click="updateBooking(booking.bookId, { status: 'inProgress' })"
              :href="getWhatsAppLink"
              :class="[
                'flex items-center justify-center w-full px-5 py-3 text-base font-medium text-green-600 border border-green-600 bg-white rounded-md hover:bg-green-200 transition-all'
              ]"
              target="_blank"
            >
              Open in
              <WhatsAppIcon class="w-6 h-6 ml-2" />
            </a>
          </div>
        </div>
      </div>
      <div
        v-else-if="booking.status === 'inProgress'"
        class="lg:w-3/5 px-6 py-8 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12"
      >
        <div class="flex justify-end" title="Cancel">
          <span @click="updateBooking(booking.bookId, { status: 'todo' })">
            <CancelIcon class="w-6 h-6 cursor-pointer" />
          </span>
        </div>
        <div class="flex flex-1 flex-col justify-center">
          <div class="m-16">
            <h1 class="mb-4 text-lg font-medium leading-6 text-gray-900">
              Message successfully sent ?
            </h1>
            <h2 class="text-sm text-gray-500">
              A successfull sending will update the Arrival time section.
            </h2>
          </div>
          <div class="flex justify-around flex-wrap mb-4">
            <div
              @click="
                updateBooking(booking.bookId, {
                  status: 'todo',
                  type: 'email',
                  messageType: 'emailMessage',
                  text: bookingsStore.replaceVariablesInText(
                    booking,
                    messagesStore.messages.find((message) => message.messageType === 'emailMessage')
                  )
                })
              "
              class="cursor-pointer flex items-center justify-center border border-red-500 text-red-500 bg-white hover:bg-red-100 rounded-full w-20 h-20"
              title="Fail"
            >
              <ThumbsDownIcon class="w-6 h-6" />
            </div>
            <div
              @click="updateArrivalTimeSection(booking, { status: 'done' })"
              class="cursor-pointer flex items-center justify-center text-green-500 border border-green-500 bg-white hover:bg-green-100 rounded-full w-20 h-20"
              title="Success"
            >
              <ThumbsUpIcon class="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
      <div
        v-else-if="booking.status === 'done'"
        class="lg:w-3/5 px-6 py-8 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12"
      >
        <div class="flex justify-end" title="Cancel">
          <span @click="updateBooking(booking.bookId, { status: 'todo' })">
            <CancelIcon class="w-6 h-6 cursor-pointer" />
          </span>
        </div>
        <div class="flex flex-1 m-12 justify-center items-center">
          <SentIcon class="w-12 h-12 text-green-500"/>
        </div>
      </div>
      <div
        v-else-if="booking.status === 'error'"
        class="lg:w-3/5 px-6 py-8 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12"
      >
        <div class="flex justify-end" title="Cancel">
          <span @click="updateBooking(booking.bookId, { status: 'todo' })">
            <CancelIcon class="w-6 h-6 cursor-pointer" />
          </span>
        </div>
        <div class="flex flex-1 m-12 justify-center items-center">
          <div class="w-12 h-12 text-grey-500">Error</div>
        </div>
      </div>
      <div
        v-if="booking.status === 'other'"
        class="lg:w-3/5 px-6 py-8 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12"
      >
        <div>There is no way to contact the guest (no phone and no email)</div>
      </div>
    </div>
  </div>
</template>
