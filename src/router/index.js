import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Ad from '../components/ads/Ad'
import AdList from '../components/ads/AdList'
import NewAd from '../components/ads/NewAd'
import Login from '../components/auth/Login'
import Registration from '../components/auth/Registration'
import Orders from '../components/User/Orders'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '',
            name: 'home',
            component: Home
        },
        {
            path: '/ad/:id',
            name: 'ad',
            component: Ad
        },
        {
            path: '/list',
            name: 'list',
            component: AdList
        },
        {
            path: '/new',
            name: 'newAd',
            component: NewAd
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/registration',
            name: 'registration',
            component: Registration
        },
        {
            path: '/orders',
            name: 'orders',
            component: Orders
        },
    ],
    mode: 'history'
})
