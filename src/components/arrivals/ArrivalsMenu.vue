<script setup>
import { computed } from 'vue'

import Date from './Date.vue'

import TopCard from './TopCard.vue'
import GuestsIcon from '@/assets/icons/Guests.vue'
import WhatsAppIcon from '@/assets/icons/WhatsApp.vue'
import EmailIcon from '@/assets/icons/Email.vue'
import ProgressionIcon from '@/assets/icons/Progression.vue'

import SenderName from './SenderName.vue'
import MessageTypes from './MessageTypes.vue'
import Status from './Status.vue'

const props = defineProps(['numberOfGuests', 'bookings'])

const getWhatsAppDone = computed(() => {
  return props.bookings?.filter((item) => item.status === 'done' && item.type === 'whatsapp').length
})

const getWhatsAppTotal = computed(() => {
  return props.bookings?.filter((item) => item.type === 'whatsapp').length
})

const getEmailDone = computed(() => {
  return props.bookings?.filter((item) => item.status === 'done' && item.type === 'email').length
})

const getEmailTotal = computed(() => {
  return props.bookings?.filter((item) => item.type === 'email').length
})

const getProgression = computed(() => {
  return props.bookings?.filter((item) => item.status === 'done').length
})
const getTotalDoable = computed(() => {
  return getEmailTotal.value + getWhatsAppTotal.value
})
</script>

<template>
  <div class="grid gap-6 my-8 sm:grid-cols-12">
    <!-- 1rst row -->
    <date class="col-span-12" :removeBorder="true" />
    <!-- 2nd row -->
    <TopCard class="col-span-12 sm:col-span-6 lg:col-span-3" title="Guests">
      <template #icon><GuestsIcon class="w-5 h-5" /></template>
      <template #data>{{ numberOfGuests }}</template>
    </TopCard>
    <TopCard class="col-span-12 sm:col-span-6 lg:col-span-3" title="WhatsApp">
      <template #icon><WhatsAppIcon class="w-5 h-5" /></template>
      <template #data>{{ getWhatsAppDone }} / {{ getWhatsAppTotal }}</template>
    </TopCard>
    <TopCard class="col-span-12 sm:col-span-6 lg:col-span-3" title="Email">
      <template #icon><EmailIcon class="w-5 h-5" /></template>
      <template #data>{{ getEmailDone }} / {{ getEmailTotal }}</template>
    </TopCard>
    <TopCard class="col-span-12 sm:col-span-6 lg:col-span-3" title="Progression">
      <template #icon><ProgressionIcon class="w-5 h-5" /></template>
      <template #data>{{ getProgression }} / {{ getTotalDoable }}</template>
    </TopCard>
    <!-- 3rd row -->
    <Suspense>
      <sender-name class="col-span-12 sm:col-span-4" :removeBorder="false" />
      <template #fallback>
        <div>loading...</div>
      </template>
    </Suspense>
    <message-types class="col-span-12 sm:col-span-4" :removeBorder="false" />
    <status class="col-span-12 sm:col-span-4" :removeBorder="false" />
  </div>
</template>

<style scoped>
/* https://tailwindcomponents.com/component/statistic-cards */
</style>
