import Phaser from 'phaser'
import {XPBar} from "../ui/XPBar.ts";
import {Plot} from "../entities/Plot.ts";
import {useCharacterStore} from "../stores/characterStore.ts";

export default class MainScene extends Phaser.Scene {
    private xpBar!: XPBar
    private plots: Plot[] = []

    constructor() {
        super('MainScene')
    }

    preload() {

    }

    async create() {
        const {width, height} = this.scale

        this.background = this.add.tileSprite(0, 0, width, height, 'background')
            .setOrigin(0, 0)
        try {
            const characterStore = useCharacterStore()

            this.xpBar = new XPBar(this)

            this.xpBar.create()
            this.xpBar.setXPRange(characterStore.character.minXP, characterStore.character.maxXP)
            this.xpBar.setXP(characterStore.character.experience)
            this.createPlotGrid(3, 3, 60, 60, 2)

            const coinsText = this.add.text(10, 60, `Coins: ${characterStore.character.coins}`, {
                fontSize: '14px',
                color: '#fff'
            }).setScrollFactor(0)

            const levelText = this.add.text(10, 40, `Level: ${characterStore.character.level}`, {
                fontSize: '14px',
                color: '#fff'
            }).setScrollFactor(0)

            this.watchEffect = characterStore.$subscribe((mutation, state) => {
                coinsText.setText(`Coins: ${state.character.coins}`)
                levelText.setText(`Level: ${state.character.level}`)
                this.xpBar.setXP(state.character.experience)
                this.xpBar.setXPRange(state.character.minXP, state.character.maxXP)
            })

        } catch (err) {
            console.error('Ошибка получения персонажа:', err)
        }
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

                const plot = new Plot(this, x, y, plotWidth, plotHeight, this.xpBar)

                this.plots.push(plot)
            }
        }
    }

    shutdown() {
        if (this.watchEffect) {
            this.watchEffect() // вызов функции отписки
        }
    }

}