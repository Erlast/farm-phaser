import httpCommunicator from './httpCommunicator'
import {useAccountStore} from "../stores/accountStore.ts";
import {useAuthStore} from "../stores/authStore.ts";

const authService = {
    async login(credentials: ICredentialModel) {
        const response: AxiosResponse<ITokenModel> = await httpCommunicator.post(
            '/auth/login',
            credentials
        )
        const authStore = useAuthStore()
        const account = useAccountStore()
        authStore.setToken(response.data.token)
        await account.load()
        return response.data
    },

    async register(credentials) {
        return await httpCommunicator.post(
            '/auth/register',
            credentials,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
    },

    // async logout() {
    //     clearStores()
    //
    //     // Опционально можно сделать запрос на удаление refreshToken на сервере
    //     return httpCommunicator.post('/auth/logout').then(() => {
    //         const authStore = useAuthStore()
    //         authStore.clearToken() // Очищаем токен через Pinia
    //         console.log('Logged out successfully')
    //     })
    // },

    // async refreshToken() {
    //     // Сервер автоматически получит refresh_token из HttpOnly cookie
    //     const response: AxiosResponse<ITokenModel> = await httpCommunicator.get('/auth/refresh')
    //     const newAccessToken = response.data.access_token
    //     const authStore = useAuthStore()
    //     authStore.setToken(newAccessToken) // Обновляем access_token
    //     return response.data
    // }
}

export default authService