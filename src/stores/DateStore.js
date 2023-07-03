import { defineStore } from 'pinia'

export const useDateStore = defineStore('date', {
  state: () => ({
    currentDate: null,
    options: { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  }),
  getters: {
    displayDate(state) {
      if (state.currentDate) {
        return state.currentDate.toLocaleDateString('en-GB', state.options)
      }
    },
    apiDate(state) {
      const { currentDate } = state
      if (currentDate) {
        let timezoneOffset = currentDate.getTimezoneOffset()
        let modifiedDate = new Date(
          currentDate.setHours(currentDate.getHours() + timezoneOffset / 60)
        )
        return modifiedDate.toISOString().split('T')[0].replace(/-/g, '')
      }
    },
    fireStoreDate(state) {
      const { currentDate } = state
      if (currentDate) {
        let timezoneOffset = currentDate.getTimezoneOffset()
        let modifiedDate = new Date(
          currentDate.setHours(currentDate.getHours() + timezoneOffset / 60)
        )
        return modifiedDate.toISOString().split('T')[0]
      }
    }
  },
  actions: {
    setCurrentDate(value) {
      this.currentDate = value
    }
  }
})
