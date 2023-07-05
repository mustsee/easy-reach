import { defineStore } from 'pinia'
import { functionBaseURL } from './../firebase/setup'
import { useDateStore } from './DateStore'
import { queryByCollection } from '../firebase/firestore'

const dateStore = useDateStore()

export const useBookingsStore = defineStore('bookings', {
  state: () => ({
    bookings: null
  }),
  getters: {
    getBookings(state) {
      if (state.bookings) {
        return state.bookings[dateStore.apiDate]
      }
      return null
    },
    getNumberOfGuests() {
      if (this.getBookings) return this.getBookings.length
      return 0
    },
    filteredBookings() {
      return this.getBookings
    }
  },
  actions: {
    /**********************
     **** ASYNC ACTIONS ****
     **********************/

    async writeGuestsData(dataUpdate = false) {
      try {
        let url = 'getArrivals?date=' + dateStore.apiDate + (dataUpdate ? '&updateData=true' : '')
        let response = await fetch(functionBaseURL + url)
        const res = await response.json()
        if (res.success) {
          // dispatch('dataLastUpdate')
          return res
        }
      } catch (e) {
        console.log('Error in writeGuestsData: ', error)
      }
    },
    async loadGuestsData() {
      try {
        const res = await queryByCollection(`guests/${dateStore.apiDate}/bookings`, 'guestName')
        this.bookings = {
          ...this.bookings,
          [dateStore.apiDate]: res
        }
      } catch (e) {
        console.log('Error in loadGuestsData: ', e)
      }
    }
  }
})
