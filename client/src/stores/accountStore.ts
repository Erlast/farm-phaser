import {defineStore} from 'pinia'
import {jwtDecode} from 'jwt-decode'
import AccountService from "../api/accountService.ts";

export const useAccountStore = defineStore('account', {
    state: () => ({
        username: null,
        loading: false,
        error: undefined
    }),
    persist: true,
    actions: {
        async load() {
            this.loading = true
            try {
                this.data = await AccountService.me()
            } catch (error: any) {
                // если возникнет ошибка, сбрасываем состояние, что бы не сохранялись предыдущие данные
                this.$reset()
                this.error = {name: error.code, message: error.message}
            }
            this.loading = false
        },
        clearStore() {
            this.$reset()
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