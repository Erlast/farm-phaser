export class BackgroundScene extends Phaser.Scene {
  constructor() {
    super('BackgroundScene')
  }
  
  create() {
    // заливаем экран цветом
    this.cameras.main.setBackgroundColor('#1e1e1e')
  }
}