<script setup>
import { computed } from 'vue'

import Date from './Date.vue'
import Guests from './Guests.vue'
import WhatsApp from './WhatsApp.vue'
import Email from './Email.vue'
import Progression from './Progression.vue'
/* import SenderName from './SenderName.vue' */
/* import MessageTypes from './MessageTypes.vue' */
/* import Status from './Status.vue' */

const props = defineProps(['numberOfGuests', 'bookings'])

const color = 'blue'
const removeBorder = true

const getWhatsAppDone = computed(() => {
  if (props.bookings) {
    return props.bookings.filter((item) => {
      if (item.status === 'done' && item.type === 'whatsapp') return true
    }).length
  }
  return 0
})
const getWhatsAppTotal = computed(() => {
  if (props.bookings) {
    return props.bookings.filter((item) => {
      if (item.type === 'whatsapp') return true
    }).length
  }
  return 0
})
const getEmailDone = computed(() => {
  if (props.bookings) {
    return props.bookings.filter((item) => {
      if (item.status === 'done' && item.type === 'email') return true
    }).length
  }
  return 0
})
const getEmailTotal = computed(() => {
  if (props.bookings) {
    return props.bookings.filter((item) => {
      if (item.type === 'email') return true
    }).length
  }
  return 0
})
const getProgression = computed(() => {
  if (props.bookings) {
    return props.bookings.filter((item) => {
      if (item.status === 'done') return true
    }).length
  }
  return 0
})
const getTotalDoable = computed(() => {
  if (props.bookings.length) {
    return getEmailTotal + getWhatsAppTotal
  }
  return 0
})
</script>

<template>
  <div class="grid gap-6 my-8 sm:grid-cols-12">
    <!-- 1 row -->
    <date class="col-span-12" :removeBorder="removeBorder" />
    <!-- 2 row -->
    <guests
      class="col-span-12 sm:col-span-6 lg:col-span-3"
      :numberOfGuests="numberOfGuests"
      :color="color"
    />
    <whats-app
      class="col-span-12 sm:col-span-6 lg:col-span-3"
      :done="getWhatsAppDone"
      :total="getWhatsAppTotal"
      :color="color"
    />
    <email
      class="col-span-12 sm:col-span-6 lg:col-span-3"
      :done="getEmailDone"
      :total="getEmailTotal"
      :color="color"
    />
    <progression
      class="col-span-12 sm:col-span-6 lg:col-span-3"
      :progress="getProgression"
      :total="getTotalDoable"
      :color="color"
    />
    <!-- 3 row -->
    <!-- <web-whats-app class="col-span-1 sm:col-span-2 grid grid-cols-3 gap-6" :removeBorder="removeBorder" :connected="connected" /> -->
    <!-- <div class="col-span-1 sm:col-span-2 flex flex-col sm:flex-row grid grid-cols-3 gap-6"> -->
    <!-- <sender-name class="col-span-12 sm:col-span-4" :removeBorder="removeBorder" /> -->
    <!-- <message-types class="col-span-12 sm:col-span-4" :removeBorder="removeBorder" /> -->
    <!-- <status class="col-span-12 sm:col-span-4" :removeBorder="removeBorder" /> -->
  </div>
</template>

<style scoped>
/* https://tailwindcomponents.com/component/statistic-cards */
</style>
