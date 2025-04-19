import Phaser from 'phaser'
import {SeedSelector} from "../ui/SeedSelector.ts";
import {XPBar} from "../ui/XPBar.ts";
import {useSeedsStore} from "../stores/seedsStore.ts";
import {useCharacterStore} from "../stores/characterStore.ts";
import {socket} from '../socket'
import characterService from "../api/characterService.ts";

interface seedData {
    id: number
    name: string
    texture: string
    buyPrice: number
    sellPrice: number
    growTime: number
    xp: number
    key: string
}

interface plotData {
    characterId: number
    id: number
    seedId: number
    isReady: boolean
    plantedAt: string
    seed: seedData
}

export class Plot {
    private scene: Phaser.Scene
    private container: Phaser.GameObjects.Container
    private background: Phaser.GameObjects.Image
    private crop?: Phaser.GameObjects.Image
    private state: 'empty' | 'growing' | 'ready' = 'empty'
    private seedType?: number
    private growTimer?: Phaser.Time.TimerEvent
    private xpBar: XPBar
    private plotData: plotData

    constructor(scene: Phaser.Scene, x: number, y: number, width: number, height: number, xpBar: XPBar, plotData: plotData) {
        this.scene = scene
        this.xpBar = xpBar
        this.plotData = plotData

        this.background = scene.add.image(0, 0, 'plot').setDisplaySize(width, height)
        if (plotData.seed)
            this.plantSeed(plotData.seed.id)
        this.container = scene.add.container(x, y, [this.background])
        this.container.setSize(width, height)
        this.container.setInteractive({useHandCursor: true})
        this.container.on('pointerdown', (pointer) => {
            this.onClick(pointer)
        }, this)
    }

    private onClick(pointer) {
        if (this.state === 'empty' && !this.seedType) {
            this.showSeedChoice(pointer)
        } else if (this.state === 'ready') {
            this.harvest()
        }
    }

    private showSeedChoice(pointer: Phaser.Input.Pointer) {
        const seedStore = useSeedsStore()

        const seeds = Object.values(seedStore.seeds)
        new SeedSelector(this.scene, pointer.x, pointer.y, seeds.map(seed => ({
            name: seed.name,
            texture: seed.texture,
            onSelect: () => this.plantSeed(seed.id)
        })))
    }

    async plantSeed(type: number) {
        const seedStore = useSeedsStore()
        const characterStore = useCharacterStore()

        const seed = seedStore.getSeed(type)

        if (!seed) return

        if (characterStore.character.coins < seed.buyPrice) {
            console.warn('Недостаточно монет для посадки')
            return
        }

        const plot = characterStore.character.plots.find(p => p.seedId === type)

        this.plotData.seed = seed

        await characterStore.changeBalance(-seed.buyPrice)

        this.seedType = type
        this.state = 'growing'

        const plantedTexture = seed.texture + '_planted' // например: "carrot_planted"
        this.crop = this.scene.add.image(0, 0, plantedTexture).setDisplaySize(50, 50)
        this.container.add(this.crop)

        if (this.plotData.seed && this.plotData.isReady) {
            this.setReady()
            return
        }

        socket.emit('plant-seed', {
            plotIndex: this.plotData.id,
            seedId: seed.id,
            userId: characterStore.character.id
        })
    }

    private setReady() {
        this.state = 'ready'

        if (this.crop && this.plotData.seed) {
            const seedStore = useSeedsStore()
            const seed = seedStore.getSeed(this.plotData.seed.id)

            if (seed) {
                this.crop.setTexture(seed.texture) // например: "carrot"
            }
        }
    }

    private async harvest() {
        if (!this.seedType) return

        const seedStore = useSeedsStore()
        const characterStore = useCharacterStore()

        const seed = seedStore.getSeed(this.seedType)
        if (!seed) return
        await this.xpBar.addXP(seed.xp)

        await characterStore.changeBalance(seed.sellPrice)
        await characterService.harvest(this.plotData.id)

        this.growTimer?.destroy
        this.state = 'empty'
        this.seedType = null
        this.crop?.destroy()
        this.crop = undefined
    }

}