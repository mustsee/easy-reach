import { defineStore } from 'pinia'

export const useDateStore = defineStore('date', {
  state: () => ({
    currentDate: null,
    displayOptions: { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' },
    dataOptions: { year: 'numeric', month: 'numeric', day: 'numeric' }
  }),
  getters: {
    displayDate(state) {
      if (state.currentDate) {
        return state.currentDate.toLocaleDateString('en-GB', state.displayOptions)
      }
    },
    apiDate(state) {
      if (state.currentDate) {
        return state.currentDate
          .toLocaleDateString('en-GB', state.dataOptions)
          .split('/')
          .reverse()
          .join('')
      }
    },
    fireStoreDate(state) {
      if (state.currentDate) {
        return state.currentDate
          .toLocaleDateString('en-GB', state.dataOptions)
          .split('/')
          .reverse()
          .join('-')
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
    },
    setCurrentDateBis(date) {
      this.currentDate = new Date(date) 
    }
  }
})
