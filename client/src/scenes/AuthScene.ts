import Phaser from 'phaser'
import {useRouter} from 'vue-router'

export default class AuthScene extends Phaser.Scene {
    constructor() {
        super('AuthScene')
    }

    create() {
        const router =useRouter()
        //router.push('/auth')
        // setTimeout(() => {
        //     const event = new CustomEvent('show-auth-form')
        //     window.dispatchEvent(event)
        // }, 100)
    }
}