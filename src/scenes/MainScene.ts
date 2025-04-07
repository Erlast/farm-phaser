import Phaser from 'phaser'

export default class MainScene extends Phaser.Scene {
    constructor() {
        super('MainScene')
    }

    create() {
        const { width, height } = this.scale

        this.cameras.main.setBackgroundColor('#1E90FF') // синий фон

        this.add.text(width / 2, height / 2, 'Добро пожаловать', {
            fontSize: '48px',
            color: '#ffffff',
        }).setOrigin(0.5)
    }
}