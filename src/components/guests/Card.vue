<script setup>
import { computed, onMounted } from 'vue'
import { useBookingsStore } from '../../stores/BookingsStore'
import { useMessagesStore } from '../../stores/MessagesStore'

import CardSkeleton from '../reusable/CardSkeleton.vue'
import CardInfos from './CardInfos.vue'
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
</script>

<style>
/* https://codepen.io/stackdiary/pen/xxPRLjV */
</style>

<template>
  <div class="pb-6">
    <div class="shadow-md lg:flex">
      <CardInfos :booking="booking" />
      <div v-if="booking.status === 'todo'" class="status-card">
        <MessageType :bookId="booking.bookId" :messageType="booking.messageType" />
        <Text :bookId="booking.bookId" :text="booking.text" class="mt-6" />
        <div class="mt-8">
          <div
            v-if="booking.type === 'email'"
            class="action-button rounded-md shadow cursor-pointer"
            @click="sendEmail(booking)"
            :class="[
              bookingsStore.isSendingMail ? 'prevent-click' : '',
              'main-action-button text-red-600 border-red-600 hover:bg-red-200'
            ]"
          >
            Send email
            <EmailLightIcon class="w-6 h-6 ml-2" />
          </div>
          <div v-if="booking.type === 'whatsapp'" class="action-button rounded-md shadow">
            <a
              @click="updateBooking(booking.bookId, { status: 'inProgress' })"
              :href="getWhatsAppLink"
              :class="['main-action-button text-green-600 border-green-600  hover:bg-green-200']"
              target="_blank"
            >
              Open in
              <WhatsAppIcon class="w-6 h-6 ml-2" />
            </a>
          </div>
        </div>
      </div>
      <CardSkeleton
        v-else-if="booking.status === 'inProgress'"
        :bookId="booking.bookId"
        @updateBooking="updateBooking"
      >
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
              class="progress-wrapper bg-white border-red-500 text-red-500 hover:bg-red-100"
              title="Fail"
            >
              <ThumbsDownIcon class="w-6 h-6" />
            </div>
            <div
              @click="updateArrivalTimeSection(booking, { status: 'done' })"
              class="progress-wrapper border-green-500 text-green-500 bg-white hover:bg-green-100"
              title="Success"
            >
              <ThumbsUpIcon class="w-6 h-6" />
            </div>
          </div>
        </div>
      </CardSkeleton>
      <CardSkeleton
        v-else-if="booking.status === 'done'"
        :bookId="booking.bookId"
        @updateBooking="updateBooking"
      >
        <div class="flex flex-1 m-12 justify-center items-center">
          <SentIcon class="w-12 h-12 text-green-500" />
        </div>
      </CardSkeleton>
      <CardSkeleton
        v-else-if="booking.status === 'error'"
        :bookId="booking.bookId"
        @updateBooking="updateBooking"
      >
        <div class="flex flex-1 m-12 justify-center items-center">Error</div>
      </CardSkeleton>
      <div v-else-if="booking.status === 'other'" class="status-card">
        <div class="flex flex-1 m-12 justify-center items-center">
          There is no way to contact the guest <br />
          (no phone and no email)
        </div>
      </div>
    </div>
  </div>
</template>
