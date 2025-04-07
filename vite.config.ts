import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    server: {
        host: true, // важно для Docker: позволяет подключаться по 0.0.0.0
        port: 5173, // стандартный порт Vite
        strictPort: true,
        watch: {
            usePolling: true, // критично для WSL2 чтобы работал hot reload
        },
    },
})