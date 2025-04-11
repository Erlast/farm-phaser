import {createApp} from 'vue'
import App from './App.vue'
import router from './router/main'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import './style.css'

import Phaser from 'phaser'
import LoadingScene from "./scenes/LoadingScene";
import {BackgroundScene} from "./scenes/BackgroundScene";
import MainScene from "./scenes/MainScene";
import AuthScene from "./scenes/AuthScene";

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app= createApp(App)

app.use(pinia)
app.use(router)
app.mount('#app')

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    parent: 'app', // у тебя в index.html должен быть <div id="app"></div>
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: '#000000',
    scene: [
        LoadingScene,
        BackgroundScene,
        AuthScene,
        MainScene
    ],
    scale: {
        mode: Phaser.Scale.RESIZE, // автоматически адаптируется под окно
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
}

new Phaser.Game(config)
