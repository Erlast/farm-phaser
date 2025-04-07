import {createApp} from 'vue'
import App from './App.vue'

import Phaser from 'phaser'
import LoadingScene from "./scenes/LoadingScene";
import MainScene from "./scenes/MainScene";

createApp(App).mount('#app')

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    parent: 'app', // у тебя в index.html должен быть <div id="app"></div>
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: '#000000',
    scene: [LoadingScene, MainScene],
    scale: {
        mode: Phaser.Scale.RESIZE, // автоматически адаптируется под окно
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
}

new Phaser.Game(config)
