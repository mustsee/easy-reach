import { defineStore } from 'pinia'

export const useArrivalsOptionsStore = defineStore('arrivalsOptions', {
  state: () => ({
    senders: [],
    currentSender: '',
    lastSender: '',
    typeFilters: [
      { value: 'all', displayName: 'All messages' },
      { value: 'whatsapp', displayName: 'WhatsApp' },
      { value: 'email', displayName: 'Email' }
    ],
    currentTypeFilter: '',
    statuses: [
      { value: 'all', displayName: 'All statuses' },
      { value: 'todo', displayName: 'To do' },
      // { value: 'inProgress', displayName: 'In progress' }, // Remove afterwards
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
    setLastSender(value) {
      this.lastSender = value
    },
    setCurrentTypeFilter(value) {
      this.currentTypeFilter = value
    },
    setCurrentStatus(value) {
      this.currentStatus = value
    }
  }
})
