
import VueRouter from 'vue-router'

import Home from '../pages/Home.vue'
import Index from '../pages/Index.vue'


const routes = [
    {
        path: '/', meta: { requiresAuth: false }, component: Index,
        children: [
            { path: '/', redirect: { name: 'home' } },
            { path: '/home', name: 'home', component: Home },
            { path: '/notfound', name: 'notFound', component: () => import('../pages/NotFound.vue') },
            {
                path: '/order',
                component: () => import('../pages/order/Default.vue'),
                children: [
                    { path: '', redirect: { name: 'list' } },
                    {
                        path: 'list', name: 'list', component: () => import('../pages/order/List.vue'), children: [
                            { path: 'select1', name: 'select1', component: () => import('../pages/order/select1.vue') }
                        ]
                    },
                    {
                        path: 'add', name: 'add', component: () => import('../pages/order/Add.vue'),
                    },
                    { path: 'edit', name: 'edit', component: () => import('../pages/order/Edit.vue') }
                ]
            },
            { path: '/mine', name: 'mine', component: () => import('../pages/Mine.vue') }
        ]
    },
    { path: '/login', name: 'login', component: () => import('../pages/Login.vue') },
    { path: '/reg', name: 'reg', component: () => import('../pages/Reg.vue') }

]

const router = new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(item => item.meta.requiresAuth)) {
        let currentUser = localStorage.getItem('currentUser') || {}
        try {
            currentUser = JSON.parse(currentUser)
        } catch (error) {
            currentUser = {}
        }
        if (currentUser.authorization) {
            next()
        } else {
            next({ name: 'Login' })
        }
    } else {
        next()
    }
})

export default router