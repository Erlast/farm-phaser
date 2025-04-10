import Phaser from 'phaser'

export default class LoadingScene extends Phaser.Scene {
    constructor() {
        super('LoadingScene')
    }

    preload() {
        const { width, height } = this.scale

        this.load.image('logo', '/assets/logo.png') // логотип

        this.add.text(width / 2, height / 2 + 100, 'Загрузка...', {
            fontSize: '32px',
            color: '#ffffff',
        }).setOrigin(0.5)

        // Пример загрузки ассетов
        this.load.image('background', 'assets/background.png')
        this.load.image('plot', 'assets/plot.png')
    }

    create() {
        const { width, height } = this.scale

        // Добавляем логотип в центр экрана
        const logo = this.add.image(width / 2, height / 2 - 50, 'logo').setOrigin(0.5)

        logo.setDisplaySize(200, 200)

        this.scene.start('BackgroundScene')
        this.scene.start('AuthScene')

    }
}