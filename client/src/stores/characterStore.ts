import {defineStore} from 'pinia'
import characterService from "../api/characterService.ts";

export const useCharacterStore = defineStore('character', {
  state: () => ({
    character: {
      coins: 100,
      level: 1,
      experience: 0,
      minXP: 0,
      maxXP: 100,
      plots: []
    },
    timer: null
  }),
  persist: true,
  actions: {
    async getCharacter() {
      this.character = await characterService.one()
    },
    async startAutoUpdate(interval: number) {
      if (this.timer) {
        clearInterval(this.timer as number)
      }
      await this.getCharacter() // Получить данные сразу при запуске
      this.scheduleNextUpdate(interval)
    },
    async autoUpdate() {
      try {
        this.character = await characterService.one()
      } catch (error: any) {
        if (error.status === 404) {
          window.location.href = '/auth'
        }
      }
    },
    async startAutoUpdate(interval: number) {
      if (this.timer) {
        clearInterval(this.timer as number)
      }
      await this.autoUpdate() // Получить данные сразу при запуске
      this.scheduleNextUpdate(interval)
    },
    scheduleNextUpdate(interval) {
      this.timer = setTimeout(async () => {
        await this.autoUpdate()
        this.scheduleNextUpdate(interval) // Планируем следующий запрос
      }, interval)
    },
    stopAutoUpdate() {
      if (this.timer) {
        clearInterval(this.timer as number)
      }
      this.timer = null
    },
    async changeBalance(amount: number) {
      await characterService.changeBalance(amount)
      await this.getCharacter()
    }
  },
  getters: {}
})