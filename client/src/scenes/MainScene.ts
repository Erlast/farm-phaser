import Phaser from 'phaser'

export default class MainScene extends Phaser.Scene {
    constructor() {
        super('MainScene')
    }

    preload() {
        // Загружаем фон
    }

    create() {
        const {width, height} = this.scale

        this.background = this.add.tileSprite(0, 0, width, height, 'background')
            .setOrigin(0, 0)

        this.createPlotGrid(3, 3, 50, 50, 2)
    }

    createPlotGrid(rows: number, cols: number, plotWidth: number, plotHeight: number, padding: number) {
        const totalWidth = cols * plotWidth + (cols - 1) * padding
        const totalHeight = rows * plotHeight + (rows - 1) * padding

        const startX = (this.scale.width - totalWidth) / 2
        const startY = (this.scale.height - totalHeight) / 2

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                const x = startX + col * (plotWidth + padding) + plotWidth / 2
                const y = startY + row * (plotHeight + padding) + plotHeight / 2

                this.add.image(x, y, 'plot').setDisplaySize(plotWidth, plotHeight)
            }
        }
    }

}