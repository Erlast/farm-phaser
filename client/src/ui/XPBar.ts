import Phaser from 'phaser'
import characterService from "../api/characterService.ts";

export class XPBar {
    private scene: Phaser.Scene
    private background!: Phaser.GameObjects.Rectangle
    private fill!: Phaser.GameObjects.Rectangle
    private currentXP: number = 0
    private minXP: number = 0
    private maxXP: number = 100

    private barWidth = 200
    private barHeight = 20
    private margin = 10

    constructor(scene: Phaser.Scene) {
        this.scene = scene
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

    setXPRange(minXP: number, maxXP: number) {
        this.minXP = minXP
        this.maxXP = maxXP
        this.updateBar()
    }

    setXP(currentXP: number) {
        this.currentXP = currentXP
        this.updateBar()
        //   this.fill.setDisplaySize(fillWidth, this.barHeight)
    }

    private updateBar() {
        const relativeXP = this.currentXP - this.minXP
        const range = this.maxXP - this.minXP
        const clamped = Phaser.Math.Clamp(relativeXP / range, 0, 1)

        this.fill.width = this.barWidth * clamped
    }

    async addXP(amount: number) {
        const newXP = this.currentXP + amount

        const data = await characterService.addXP(amount)
        this.setXPRange(data.minXP, data.maxXP)
        this.setXP(newXP)
    }

    getXP() {
        return this.currentXP
    }

}