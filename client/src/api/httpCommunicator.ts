import axios, {AxiosError} from 'axios'
import router from '@/router/main'
import {useAuthStore} from "../stores/authStore.ts";

const httpCommunicator = axios.create({
    baseURL: 'http://localhost:4000/api', // URL API
    timeout: 50000,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
})

// Перехватчик запросов для добавления токена авторизации
httpCommunicator.interceptors.request.use(
    config => {
        if (config.url !== '/auth/refresh') {
            const authStore = useAuthStore() // Получаем доступ к хранилищу Pinia
            const token = authStore.token // Извлекаем токен
            if (token) {
                config.headers.Authorization = `Bearer ${token}`
            }
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

// Перехватчик ответов для обработки ошибок авторизации
httpCommunicator.interceptors.response.use(
    response => {
        return response
    },
    async (error: AxiosError) => {
        // if (
        //     error.response &&
        //     error.response.status === 401
        // ) {
        //     window.location.href = '/auth'
        // }
        // if (error.response && error.response.status === 403) {
        //     // clearStores(true)
        //     await router.push({name: 'auth'})
        // }
        return Promise.reject(error)
    }
)

export default httpCommunicator