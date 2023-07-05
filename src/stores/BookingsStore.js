import { defineStore } from 'pinia'
import { functionBaseURL } from './../firebase/setup'
import { useDateStore } from './DateStore'
import { useMessagesStore } from './MessagesStore'

import { queryByCollection } from '../firebase/firestore'

const dateStore = useDateStore()
const messagesStore = useMessagesStore()

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
    setMessage(bookId, messageType) {
      /* Modify : messageType, type, text */
      let updatedBookings = this.bookings[dateStore.apiDate].map((booking) => {
        if (booking.bookId === bookId) {
          booking.messageType = messageType
          if (messageType === 'emailMessage') {
            booking.type = 'email'
          } else if (!(messageType === 'other')) {
            booking.type = 'whatsapp'
          }
          const message = messagesStore.messages.find(
            (message) => message.messageType === messageType
          )
          const { text, variables } = message
          let modifiedText = text
          for (const variable of variables) {
            let replaceBy = booking[variable] ? booking[variable] : `--${variable}--`
            modifiedText = modifiedText.replace(`--${variable}--`, replaceBy)
          }
          booking.text = modifiedText
        }
        return booking
      })
      this.bookings = {
        ...this.bookings,
        [dateStore.apiDate]: updatedBookings
      }
    },
    setCurrentText(bookId, text) {
      let updatedBookings = this.bookings[dateStore.apiDate].map((booking) => {
        if (booking.bookId === bookId) {
          booking.text = text
        }
        return booking
      })
      this.bookings = {
        ...this.bookings,
        [dateStore.apiDate]: updatedBookings
      }
    },
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
      console.log('loadGuestsData')
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
