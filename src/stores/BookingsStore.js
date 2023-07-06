import { defineStore } from 'pinia'
import { functionBaseURL } from './../firebase/setup'
import { useDateStore } from './DateStore'
import { useMessagesStore } from './MessagesStore'
import { useArrivalsOptionsStore } from './ArrivalsOptionsStore'

import { queryByCollection, set } from '../firebase/firestore'

const dateStore = useDateStore()
const messagesStore = useMessagesStore()
const ArrivalsOptionsStore = useArrivalsOptionsStore()

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
      const typeFilter = ArrivalsOptionsStore.currentTypeFilter
      const statusFilter = ArrivalsOptionsStore.currentStatus
      let res = this.getBookings
      if (typeFilter !== 'all') res = res.filter((booking) => booking.type === typeFilter)
      if (statusFilter !== 'all') res = res.filter((booking) => booking.status === statusFilter)
      return res
    }
  },
  actions: {
    setMessage(bookId, messageType) {
      /* Modify : messageType, type, text */
      /* Put these informations to firestore to get in sync */
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
          const senderName = ArrivalsOptionsStore.currentSender
            ? ArrivalsOptionsStore.currentSender
            : '--senderName--'
          let modifiedText = text
          for (const variable of variables) {
            let replaceBy = booking[variable]
              ? booking[variable]
              : variable === 'senderName'
              ? senderName
              : `--${variable}--`
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
    setSenderName(senderName) {
      let updatedBookings = this.bookings[dateStore.apiDate].map((booking) => {
        const lastSenderName = ArrivalsOptionsStore.lastSender
        const { text } = booking
        let hasSenderNameKey = text.search('--senderName--')
        let updatedText
        if (hasSenderNameKey !== -1) {
          updatedText = text.replace('--senderName--', senderName)
        } else {
          updatedText = text.replace(lastSenderName, senderName)
        }
        booking.text = updatedText
        return booking
      })
      this.bookings = {
        ...this.bookings,
        [dateStore.apiDate]: updatedBookings
      }
      ArrivalsOptionsStore.setLastSender(senderName)
    },
    // helper function
    replaceVariablesInText(booking, message) {
      const { text, variables } = message
      let modifiedText = text
      for (const variable of variables) {
        let replaceBy = booking[variable] ? booking[variable] : `--${variable}--`
        modifiedText = modifiedText.replace(`--${variable}--`, replaceBy)
      }
      return modifiedText
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
      try {
        const res = await queryByCollection(`guests/${dateStore.apiDate}/bookings`, 'guestName')
        this.bookings = {
          ...this.bookings,
          [dateStore.apiDate]: res
        }
        if (ArrivalsOptionsStore.currentSender) {
          this.setSenderName(ArrivalsOptionsStore.currentSender)
        }
      } catch (e) {
        console.log('Error in loadGuestsData: ', e)
      }
    },
    async updateBooking(bookId, value) {
      try {
        await set(`guests/${dateStore.apiDate}/bookings/${bookId}`, value)
        this.loadGuestsData()
      } catch (error) {
        console.log('Error while updating card status: ', error)
      }
    },
    async updateArrivalTimeSection(bookId, previousArrivalTimeText, type) {
      console.log('type', type)
      try {
        let url =
          'updateBeds24ArrivalTimeSection?bookId=' +
          bookId +
          '&previousArrivalTimeText=' +
          previousArrivalTimeText +
          '&type=' +
          type
        let response = await fetch(functionBaseURL + url)
        const res = await response.json()
        if (res.success) {
          // Update store and firebase / Don't overcharge Beds24 API
          try {
            await set(`guests/${dateStore.apiDate}/bookings/${bookId}`, { arrivalTime: res.text })
            this.loadGuestsData()
          } catch (error) {
            console.log('Error while updating card arrival time: ', error)
          }
        }
      } catch (error) {
        console.log('Error in updateBeds24ArrivalTimeSection: ', error)
      }
    }
  }
})
