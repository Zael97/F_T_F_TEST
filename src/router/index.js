import { createRouter, createWebHashHistory } from 'vue-router';

import Login from '@/views/Login.vue';
import Repos from '@/views/Repos.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Login,

    }, {
        path: '/login',
        name: 'Login',
        component: Login
    }, {
        path: '/repos',
        name: 'Repos',
        component: Repos
    }
]

export default createRouter({
    history: createWebHashHistory(),
    routes
});