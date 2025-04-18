import Phaser from 'phaser'
import {SeedSelector} from "../ui/SeedSelector.ts";
import {XPBar} from "../ui/XPBar.ts";
import {useSeedsStore} from "../stores/seedsStore.ts";
import {useCharacterStore} from "../stores/characterStore.ts";

export class Plot {
    private scene: Phaser.Scene
    private container: Phaser.GameObjects.Container
    private background: Phaser.GameObjects.Image
    private crop?: Phaser.GameObjects.Image
    private state: 'empty' | 'growing' | 'ready' = 'empty'
    private seedType?: SeedType
    private growTimer?: Phaser.Time.TimerEvent
    private xpBar: XPBar

    constructor(scene: Phaser.Scene, x: number, y: number, width: number, height: number, xpBar: XPBar) {
        this.scene = scene
        this.xpBar = xpBar

        this.background = scene.add.image(0, 0, 'plot').setDisplaySize(width, height)

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

    async plantSeed(type: SeedType) {
        const seedStore = useSeedsStore()
        const characterStore = useCharacterStore()

        const seed = seedStore.getSeed(type)

        if (!seed) return

        if (characterStore.character.coins < seed.buyPrice) {
            console.warn('Недостаточно монет для посадки')
            return
        }

        await characterStore.changeBalance(-seed.buyPrice)

        this.seedType = type
        this.state = 'growing'

        this.crop = this.scene.add.image(0, 0, seed.texture).setAlpha(0.5).setDisplaySize(45, 45)
        this.container.add(this.crop)

        this.growTimer = this.scene.time.delayedCall(seed.growTime, () => {
            this.setReady()
        })
    }

    private setReady() {
        this.state = 'ready'
        if (this.crop) {
            this.crop.setAlpha(1)
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

        this.growTimer?.destroy
        this.state = 'empty'
        this.seedType = undefined
        this.crop?.destroy()
        this.crop = undefined
    }

}