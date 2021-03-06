import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/core/View.vue'
import About from '@/components/core/About.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
          title: 'Portfolio',
          desc: 'ポートフォリオ',
        },
    },
    {
        path: '/about',
        name: 'About',
        component: About,
        meta: {
          title: 'Portfolio',
          desc: 'ポートフォリオ',
        },
    },
]

const router = new VueRouter({ mode: 'history', base: process.env.BASE_URL, routes })
export default router
