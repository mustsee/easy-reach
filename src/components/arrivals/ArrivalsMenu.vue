<script setup>
import Date from './Date.vue'
import TopCards from './TopCards.vue'
import SenderName from './SenderName.vue'
import MessageTypes from './MessageTypes.vue'
import Status from './Status.vue'

defineProps(['bookings'])
</script>

<template>
  <div class="grid gap-6 my-8 sm:grid-cols-12">
    <!-- 1rst row -->
    <date class="col-span-12" :removeBorder="true" />
    <!-- 2nd row -->
    <TopCards :bookings="bookings" />
    <!-- 3rd row -->
    <Suspense>
      <SenderName class="col-span-12 sm:col-span-4" :removeBorder="false" />
      <template #fallback>
        <div>loading...</div>
      </template>
    </Suspense>
    <MessageTypes class="col-span-12 sm:col-span-4" :removeBorder="false" />
    <Status class="col-span-12 sm:col-span-4" :removeBorder="false" />
  </div>
</template>
