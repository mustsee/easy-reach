import { defineStore } from 'pinia'
import { add } from '../firebase/firestore'
//import { toast } from 'vue3-toastify'

export const useClickCounterStore = defineStore('click-counter', {
  state: () => ({
    logNames: {
      data_firstLoad: "data_firstLoad",
      data_mainLoad: "data_mainLoad",
      data_refreshData: "data_refreshData",
      date_previous: "date_previous",
      date_next: "date_next",
      date_calendar: "date_calendar",
      filter_name: "filter_name",
      filter_type: "filter_type",
      filter_status: "filter_status",
      card_phoneDisplayInput: "card_phoneDisplayInput",
      card_phoneCloseInput: "card_phoneCloseInput",
      card_phoneUpdate: "card_phoneUpdate",
      card_arrivalTimeDisplayInput: "card_arrivalTimeDisplayInput",
      card_arrivalTimeCloseInput: "card_arrivalTimeCloseInput",
      card_arrivalTimeUpdate: "card_arrivalTimeUpdate",
      card_messageType: "card_messageType",
      card_text: "card_text",
      card_customWhatsApp: "card_customWhatsApp",
      card_customMail: "card_customMail",
      card_mail: "card_Mail",
      card_whatsApp: "card_whatsApp"
    },
  }),
  actions: {
    async log(name) {
      const now = new Date()
      const date = now.toLocaleDateString().split('/').reverse().join('')
      const time = now.toLocaleTimeString()
      try {
        await add(`logs/${date}/${this.logNames[name]}`, {time, navigator: navigator.userAgent})
        /* toast('Success writing log', {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: true,
          type: 'success'
        }) */
      } catch (error) {
        console.log(error)
        /* toast('Error writing log', {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: false,
          type: 'error'
        }) */
      }
    },
  }
})
