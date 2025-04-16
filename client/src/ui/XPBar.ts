import Phaser from 'phaser'
import characterService from "../api/characterService.ts";

export class XPBar {
    private scene: Phaser.Scene
    private background!: Phaser.GameObjects.Rectangle
    private fill!: Phaser.GameObjects.Rectangle
    private maxXP: number
    private currentXP: number = 0

    private barWidth = 200
    private barHeight = 20
    private margin = 10

    constructor(scene: Phaser.Scene, maxXP: number = 100) {
        this.scene = scene
        this.maxXP = maxXP
    }

    create() {
        const {margin, barWidth, barHeight} = this

        this.background = this.scene.add.rectangle(
            margin + barWidth / 2,
            margin + barHeight / 2,
            barWidth,
            barHeight,
            0x333333
        ).setOrigin(0.5).setScrollFactor(0)

        // Заполненная часть
        this.fill = this.scene.add.rectangle(
            margin + barWidth / 2 - barWidth / 2,
            margin + barHeight / 2,
            0,
            barHeight,
            0x00ff00
        ).setOrigin(0, 0.5).setScrollFactor(0)
        // фон
        // this.background = this.scene.add.image(margin + barWidth / 2, margin + barHeight / 2, 'xp_bar_frame')
        //     .setOrigin(0.5)
        //     .setDisplaySize(barWidth, barHeight)
        //     .setScrollFactor(0)
        //
        // // заливка
        // this.fill = this.scene.add.image(margin + barWidth / 2 - barWidth / 2, margin + barHeight / 2, 'xp_bar_fill')
        //     .setOrigin(0, 0.5)
        //     .setDisplaySize(0, barHeight)
        //     .setScrollFactor(0)
    }

    setXP(currentXP: number) {
        this.currentXP = Phaser.Math.Clamp(currentXP, 0, this.maxXP)
        this.fill.width = (this.currentXP / this.maxXP) * this.barWidth
        //   this.fill.setDisplaySize(fillWidth, this.barHeight)
    }

    async addXP(amount: number) {
        this.setXP(this.currentXP + amount)

        await characterService.addXP(amount)
    }

    getXP() {
        return this.currentXP
    }

}