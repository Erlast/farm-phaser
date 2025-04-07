import Phaser from 'phaser'

export class GameScene extends Phaser.Scene {
    constructor() {
        super('GameScene')
    }

    preload() {
        this.load.image('logo', '/assets/logo.png') // в public/logo.png
    }

    create() {
        const logo = this.add.image(400, 300, 'logo')
        this.tweens.add({
            targets: logo,
            y: 100,
            duration: 1500,
            ease: 'Power2',
            yoyo: true,
            repeat: -1,
        })
    }
}