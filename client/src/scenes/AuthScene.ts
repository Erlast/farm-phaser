import Phaser from 'phaser'
import router from '@/router/main'

export default class AuthScene extends Phaser.Scene {
    constructor() {
        super('AuthScene')
    }

    create() {
        router.push('/auth')
    }
}