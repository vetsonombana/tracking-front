import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home/Home.vue'
import Command from '../pages/Command/Command.vue'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/:idcommand',
            component: Command
        }
    ]
})