import Home from './components/Home.vue'
import Login from './components/Login.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        name: 'Home',
        component: Home,
        path: '/'
    },
    {
        name: 'Login',
        component: Login,
        path: '/sign-up'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
