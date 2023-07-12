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
      if (state.currentDate) {
        return state.currentDate.toISOString().split('T')[0].replace(/-/g, '')
      }
    },
    fireStoreDate(state) {
      if (state.currentDate) {
        return state.currentDate.toISOString().split('T')[0]
      }
    }
  },
  actions: {
    setCurrentDate(increaseBy = 0) {
      let value
      if (!this.currentDate) {
        let now = new Date()
        value = new Date(now.setDate(now.getDate() + 2))
      } else {
        value = new Date(this.currentDate.setDate(this.currentDate.getDate() + increaseBy))
      }
      this.currentDate = value
    }
  }
})
