import Phaser from "phaser";
import LoadingScene from "./scenes/LoadingScene.ts";
import {BackgroundScene} from "./scenes/BackgroundScene.ts";
import AuthScene from "./scenes/AuthScene.ts";
import MainScene from "./scenes/MainScene.ts";

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    parent: 'game-container', // у тебя в index.html должен быть <div id="app"></div>
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

export const phaserGame = new Phaser.Game(config)