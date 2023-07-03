<script setup>
import ArrivalsMenu from './../components/arrivals/ArrivalsMenu.vue'

const getNumberOfGuests = 4
const getBookings = []
</script>

<template>
  <arrivals-menu :numberOfGuests="getNumberOfGuests" :bookings="getBookings" />
</template>

<style></style>
