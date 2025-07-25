import Vue from 'vue'
import Router from 'vue-router'
import PokemonView from './views/PokemonView.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/pokemon',
            name: 'pokemon',
            component: PokemonView
        }
    ]
})