import { defineStore } from 'pinia'
import { jwtDecode } from 'jwt-decode'
import { LocationQuery } from 'vue-router';

interface IEntryPoint {
  url: string | undefined
  query: LocationQuery | undefined
}
interface IState {
  token: string | null
  isSmsSend: boolean
  timerSms: number
  entryPoint?: IEntryPoint
}
interface IGetter {
  isAuthenticated: (s: IState) => boolean
  accountName: (s: IState) => string | undefined
  [key: string]: any
}
interface IAction {
  setToken: (token: string | null) => void
  clearToken: () => void
  setSmsSend: (isSmsSend: boolean) => void
  setTimerSms: (timerSms: number) => void
  setEntryPoint: (entryPoint: IEntryPoint) => void;
  clearEntryPoint: () => void
}

export const useAuthStore = defineStore<'auth', IState, IGetter, IAction>({
  id: 'auth',
  state: () => ({
    token: null,
    isSmsSend: false,
    timerSms: 0,
    entryPoint: undefined
  }),
  persist: true,
  actions: {
    setToken(token: string | null) {
      this.token = token
    },
    clearToken() {
      this.token = null
    },
    setSmsSend(isSmsSend: boolean) {
      this.isSmsSend = isSmsSend
    },
    setTimerSms(timerSms: number) {
      this.timerSms = timerSms
    },
    setEntryPoint(entryPoint: IEntryPoint) {
      this.entryPoint = entryPoint;
    },
    clearEntryPoint() {
      this.entryPoint = { url: undefined, query: undefined };
    },
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
