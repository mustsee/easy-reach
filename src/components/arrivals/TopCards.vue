<script setup>
import { computed } from 'vue'

import TopCard from '../reusable/TopCard.vue'

const props = defineProps(['bookings'])

const getNumberOfGuests = computed(() => {
  if (props.bookings) return props.bookings.length
  return 0
})

const getWhatsAppDone = computed(() => {
  if (props.bookings) {
    return props.bookings.filter((item) => item.status === 'done' && item.type === 'whatsapp')
      .length
  }
  return 0
})

const getWhatsAppTotal = computed(() => {
  if (props.bookings) {
    return props.bookings.filter((item) => item.type === 'whatsapp').length
  }
  return 0
})

const getEmailDone = computed(() => {
  if (props.bookings) {
    return props.bookings.filter((item) => item.status === 'done' && item.type === 'email').length
  }
  return 0
})

const getEmailTotal = computed(() => {
  if (props.bookings) {
    return props.bookings.filter((item) => item.type === 'email').length
  }
  return 0
})

const getProgression = computed(() => {
  if (props.bookings) {
    return props.bookings.filter((item) => item.status === 'done').length
  }
  return 0
})

const getTotalDoable = computed(() => {
  return getEmailTotal.value + getWhatsAppTotal.value
})
</script>

<template>
  <TopCard data-cy="guests" class="col-span-12 sm:col-span-6 lg:col-span-3" title="Guests">
    <template #icon><GuestsIcon class="w-5 h-5" /></template>
    <template #data>{{ getNumberOfGuests }}</template>
  </TopCard>
  <TopCard data-cy="whatsapp" class="col-span-12 sm:col-span-6 lg:col-span-3" title="WhatsApp">
    <template #icon><WhatsAppIcon class="w-5 h-5" /></template>
    <template #data>{{ getWhatsAppDone }} / {{ getWhatsAppTotal }}</template>
  </TopCard>
  <TopCard data-cy="email" class="col-span-12 sm:col-span-6 lg:col-span-3" title="Email">
    <template #icon><EmailIcon class="w-5 h-5" /></template>
    <template #data>{{ getEmailDone }} / {{ getEmailTotal }}</template>
  </TopCard>
  <TopCard
    data-cy="progression"
    class="col-span-12 sm:col-span-6 lg:col-span-3"
    title="Progression"
  >
    <template #icon><ProgressionIcon class="w-5 h-5" /></template>
    <template #data>{{ getProgression }} / {{ getTotalDoable }}</template>
  </TopCard>
</template>
