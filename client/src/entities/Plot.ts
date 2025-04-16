import Phaser from 'phaser'
import {SeedSelector} from "../ui/SeedSelector.ts";
import {XPBar} from "../ui/XPBar.ts";

type SeedType = 'carrot' | 'cucumber'

interface SeedInfo {
    key: SeedType
    growTime: number // в мс
    texture: string
    xp: number
}

const SEEDS: Record<SeedType, SeedInfo> = {
    carrot: {key: 'carrot', growTime: 5000, texture: 'carrot', xp: 5},
    cucumber: {key: 'cucumber', growTime: 8000, texture: 'cucumber', xp: 10}
}

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
        if (this.state === 'empty') {
            this.showSeedChoice(pointer)
        } else if (this.state === 'ready') {
            this.harvest()
        }
    }

    private showSeedChoice(pointer: Phaser.Input.Pointer) {
        new SeedSelector(this.scene, pointer.x, pointer.y, [
            {
                name: 'Морковка',
                texture: 'carrot', // Имя текстуры морковки
                onSelect: () => {
                    this.plantSeed('carrot') // 5 секунд на рост морковки
                }
            },
            {
                name: 'Огурец',
                texture: 'cucumber', // Имя текстуры огурца
                onSelect: () => {
                    this.plantSeed('cucumber') // 7 секунд на рост огурца
                }
            }
        ])
    }

    plantSeed(type: SeedType) {
        const info = SEEDS[type]
        this.seedType = type
        this.state = 'growing'

        this.crop = this.scene.add.image(0, 0, info.texture).setAlpha(0.5).setDisplaySize(45, 45)
        this.container.add(this.crop)

        this.growTimer = this.scene.time.delayedCall(info.growTime, () => {
            this.setReady()
        })
    }

    private setReady() {
        this.state = 'ready'
        if (this.crop) {
            this.crop.setAlpha(1)
        }
    }

    private harvest() {
        if (!this.seedType) return

        const info = SEEDS[this.seedType]
        this.xpBar.addXP(info.xp)

        this.state = 'empty'
        this.seedType = undefined
        this.crop?.destroy()
        this.crop = undefined
    }

}