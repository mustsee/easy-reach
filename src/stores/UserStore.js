import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null
  }),
  getters: {
    userDisplayName(state) {
      if (state.user) {
        return state.user.displayName
      }
    },
    userEmail(state) {
      if (state.user) {
        return state.user.email
      }
    }
  },
  actions: {
    setUser(user) {
      this.user = user
    }
  }
})
