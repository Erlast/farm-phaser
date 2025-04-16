import Phaser from 'phaser'

type SeedOption = {
    name: string
    texture: string
    onSelect: () => void
}

export class SeedSelector extends Phaser.GameObjects.Container {
    constructor(scene: Phaser.Scene, x: number, y: number, options: SeedOption[]) {
        super(scene, x, y)
        scene.add.existing(this)

        const background = scene.add.rectangle(0, 0, 150, options.length * 60 + 20, 0x000000, 0.7)
            .setOrigin(0.5)
            .setStrokeStyle(2, 0xffffff)

        this.add(background)

        options.forEach((option, index) => {
            const btnY = -((options.length - 1) * 30) + index * 60

            const icon = scene.add.image(-40, btnY, option.texture).setDisplaySize(32, 32)
            const label = scene.add.text(0, btnY, option.name, { fontSize: '16px', color: '#ffffff' }).setOrigin(0, 0.5)

            const hitArea = scene.add.rectangle(0, btnY, 140, 40, 0x000000, 0)
                .setOrigin(0.5)
                .setInteractive({ useHandCursor: true })
                .on('pointerdown', () => {
                    option.onSelect()
                    this.destroy()
                })

            this.add([icon, label, hitArea])
        })
    }
}