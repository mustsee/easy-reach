import { defineStore } from 'pinia'

export const useArrivalsOptionsStore = defineStore('arrivalsOptions', {
  state: () => ({
    senders: [],
    currentSender: '',
    typeFilters: [
      { value: 'all', displayName: 'All messages' },
      { value: 'whatsapp', displayName: 'WhatsApp' },
      { value: 'email', displayName: 'Email' }
    ],
    currentTypeFilter: '',
    statuses: [
      { value: 'all', displayName: 'All statuses' },
      { value: 'todo', displayName: 'To do' },
      { value: 'done', displayName: 'Done' },
      { value: 'error', displayName: 'Error' }
    ],
    currentStatus: ''
  }),
  getters: {},
  actions: {
    setSenders(value) {
      this.senders = value
    },
    setCurrentSender(value) {
      this.currentSender = value
    },
    setCurrentTypeFilter(value) {
      this.currentTypeFilter = value
    },
    setCurrentStatus(value) {
      this.currentStatus = value
    }
  }
})
