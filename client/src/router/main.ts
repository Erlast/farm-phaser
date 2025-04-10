import { createRouter, createWebHistory } from 'vue-router'
import AuthForm from "@/components/AuthForm.vue";
import RegistrationForm from "@/components/RegistrationForm.vue";

const routes = [
    { path: '/', redirect: '/auth' },
    { path: '/auth', component: AuthForm },
    { path: '/register', component: RegistrationForm },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router