import Phaser from 'phaser'
import {useAuthStore} from "../stores/authStore.ts";

export default class AuthScene extends Phaser.Scene {
    constructor() {
        super('AuthScene')
    }

    create() {
        const authStore = useAuthStore();
        if (authStore.isAuthenticated) {
            this.scene.start('MainScene')
        }
    }
}