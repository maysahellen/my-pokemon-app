// @ts-nocheck
import Vue from 'vue'
import Router from 'vue-router'
import PokemonView from '../src/views/PokemonView.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/pokemon'
        },
        {
            path: '/pokemon',
            name: 'pokemon',
            component: PokemonView
        }
    ]
})