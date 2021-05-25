import Vue from 'vue'
import Router from 'vue-router'
import View from '@/components/core/View.vue'
import AboutView from '@/components/core/AboutView.vue'

Vue.use(Router)

export default new Router({
    mode: 'history', // history 모드는 자연스러운 url 가능, 지정하지 않으면 해시(#)기호로 url 사용
    routes: [
        {
            path: '/',
            name: 'View',
            component: View,
        },
        {
            path: '/about',
            name: 'AboutView',
            component: AboutView,
        },
    ],
})
