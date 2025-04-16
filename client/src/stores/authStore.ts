import { defineStore } from 'pinia'
import { jwtDecode } from 'jwt-decode'

export const useAuthStore = defineStore('auth',{
  state: () => ({
    token: null
  }),
  persist: true,
  actions: {
    setToken(token: string | null) {
      this.token = token
    },
    clearToken() {
      this.token = null
    }
  },
  getters: {
    isAuthenticated: state => !!state.token,
    accountName: state => {
      if (state.token) {
        return jwtDecode(state.token).sub
      }
      return ''
    }
  }
})
