import {defineStore} from 'pinia'
import questsService from "../api/questsService.ts";

export const useQuestsStore = defineStore('quests', {
    state: () => ({
        quests: [],
        timer: null
    }),
    persist: true,
    actions: {
        async getQuests() {
            this.quests = await questsService.getAvailable()
        },
        async startAutoUpdate(interval: number) {
            if (this.timer) {
                clearInterval(this.timer as number)
            }
            await this.getQuests() // Получить данные сразу при запуске
            this.scheduleNextUpdate(interval)
        },
        async autoUpdate() {
            try {
                this.quests = await questsService.getAvailable()
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
        }
    },
    getters: {}
})