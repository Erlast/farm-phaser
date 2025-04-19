import {createRouter, createWebHistory} from 'vue-router'
import AuthForm from "@/components/AuthForm.vue";
import RegistrationForm from "@/components/RegistrationForm.vue";
import {useAuthStore} from "../stores/authStore.ts";
import GameWrapper from "../components/GameWrapper.vue";
import {useCharacterStore} from "../stores/characterStore.ts";
import {useSeedsStore} from "../stores/seedsStore.ts";

const routes = [
    {path: '/', redirectTo: 'game'},
    {path: '/auth', component: AuthForm},
    {path: '/register', component: RegistrationForm},
    {
        path: '/game',
        name: 'game',
        component: GameWrapper, // компонент-обёртка под Phaser
        meta: {requiresAuth: true}
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    const authStore = useAuthStore()
    if (to.meta.requiresAuth && !authStore.isAuthenticated) {
        const characterStore = useCharacterStore()
        const seedsStore = useSeedsStore()
        characterStore.stopAutoUpdate()
        seedsStore.stopAutoUpdate()
        next('/auth')
    } else {
        next()
    }
})

export default router