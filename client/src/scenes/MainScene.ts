import Phaser from 'phaser'
import {XPBar} from "../ui/XPBar.ts";
import {Plot} from "../entities/Plot.ts";
import {useCharacterStore} from "../stores/characterStore.ts";
import {socket} from '../socket'
import {useQuestsStore} from "../stores/questsStore.ts";
import questsService from "../api/questsService.ts";

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
      this.createPlotGrid(5, 50, 100)
      
      socket.on('seed-ready', ({plotIndex, seedId}) => {
        const plot = this.plots.find(plot => plot.plotData.id === plotIndex)
        if (plot) {
          plot.setReady() // если setReady может принимать seedId
        }
      })
      
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
      
      this.renderQuests()
      
    } catch (err) {
      console.error('Ошибка получения персонажа:', err)
    }
  }
  
  createPlotGrid(columns: number, cellSize: number, offsetY: number) {
    const characterStore = useCharacterStore()
    const plotCount = characterStore.character.plots.length
    const totalPlots = plotCount + 1 // обычные + кнопка покупки
    const {width} = this.scale
    const padding = 0
    
    for (let i = 0; i < totalPlots; i++) {
      // Для расчёта смещения по центру используем только обычные грядки
      const row = Math.floor(i / columns)
      const col = i % columns
      
      // Количество грядок в этом ряду, только для обычных грядок
      let plotsInRow = columns
      
      const totalWidth = plotsInRow * cellSize + (plotsInRow - 1) * padding
      const startX = (width - totalWidth) / 2
      
      const x = startX + col * (cellSize + padding) + cellSize / 2 // просто обычный расчёт
      const y = offsetY + row * (cellSize + padding) + cellSize / 2
      
      if (i < plotCount) {
        const plotData = characterStore.character.plots[i]
        const plot = new Plot(this, x, y, cellSize, cellSize, this.xpBar, plotData)
        
        this.add.existing(plot)
        this.plots.push(plot)
      } else {
        const buyPlotButton = this.add.rectangle(x, y, cellSize, cellSize, 0x888888)
          .setStrokeStyle(2, 0xffffff)
          .setInteractive({useHandCursor: true})
          .on('pointerdown', () => {
            console.log('Покупка новой грядки!')
          })
        
        this.add.text(x, y, '+', {
          fontSize: '24px',
          color: '#ffffff'
        }).setOrigin(0.5)
      }
    }
  }
  
  private async renderQuests() {
    const questsStore = useQuestsStore()
    const margin = 20
    const sceneWidth = this.scale.width
    
    await questsStore.getQuests()
    
    let startY = 50
    
    questsStore.quests.forEach((quest, questIndex) => {
      const titleText = this.add.text(sceneWidth - margin, startY, `• ${quest.title}`, {
        fontSize: '14px',
        color: '#ffffff',
        align: 'right',
        wordWrap: {width: 200}
      }).setOrigin(1, 0)
      
      startY += titleText.height + 4
      
      quest.steps.forEach((step: any) => {
        const desc = this.getStepDescription(step)
        const stepText = this.add.text(sceneWidth - margin, startY, `- ${desc}`, {
          fontSize: '12px',
          color: '#cccccc',
          align: 'right',
          wordWrap: {width: 200}
        }).setOrigin(1, 0)
        
        startY += stepText.height + 2
      })
      
      startY += 10 // отступ между квестами
    })
  }
  
  private getStepDescription(step: any): string {
    switch (step.type) {
      case 'HARVEST':
        return `Собрать ${step.targetAmount} × ${step.targetSeed?.name ?? 'семя'}`
      case 'PLANT':
        return `Посадить ${step.targetAmount} × ${step.targetSeed?.name ?? 'семя'}`
      case 'LEVEL_UP':
        return `Повысить уровень`
      case 'BUY_PLOT':
        return `Купить грядку`
      default:
        return 'Неизвестная цель'
    }
  }
  
  shutdown() {
    if (this.watchEffect) {
      this.watchEffect() // вызов функции отписки
    }
  }
  
}

