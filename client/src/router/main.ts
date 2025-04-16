import {createRouter, createWebHistory} from 'vue-router'
import AuthForm from "@/components/AuthForm.vue";
import RegistrationForm from "@/components/RegistrationForm.vue";
import {useAuthStore} from "../stores/authStore.ts";
import GameWrapper from "../components/GameWrapper.vue";

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
        next('/auth')
    } else {
        console.log('hhh')
        next()
    }
})

export default router