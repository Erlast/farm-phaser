import {defineStore} from 'pinia'
import seedsService from "../api/seedsService.ts";

export interface Seed {
  key: string
  name: string
  texture: string
  growTime: number
  xp: number
  buyPrice: number
  sellPrice: number
}

export const useSeedsStore = defineStore('seeds', {
  state: () => ({
    seeds: {} as Record<string, Seed>,
    timer: null
  }),
  persist: true,
  actions: {
    async fetchSeeds() {
      this.seeds = await seedsService.getSeeds()
    },
    getSeed(key: string) {
      const seed = this.seeds.find(seed => seed.id === key)
      if (!seed) throw new Error("Seed not found")
      return seed
    },
    async autoUpdate() {
      try {
        this.seeds = await seedsService.getSeeds()
      } catch (error: any) {
        console.log(error)
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
    // Функция для остановки обновления
    stopAutoUpdate() {
      if (this.timer) {
        clearInterval(this.timer as number)
      }
      this.timer = null
    },
  },
  getters: {}
})