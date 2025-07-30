import Router from 'vue-router'
import router from '../../router.js'
import PokemonView from '@/views/PokemonView.vue'
import { createLocalVue } from '@vue/test-utils'
 
describe('when /pokemon is accessed', () => {
 
    const localVue = createLocalVue(); 
    localVue.use(Router);
    let routes;
    let pokemonRoute;
 
    beforeEach(() => {
        routes = router.options.routes;
        pokemonRoute = routes.find(route => route.path === '/pokemon');
    })
 
    it('then the route was defined', () => {
        expect(pokemonRoute).toBeDefined(); 
    })
 
    it('then the name of the route is pokemon', () => {
        expect(pokemonRoute.name).toBe('pokemon'); 
    })
 
    it('then the route component is PokemonView', () => {
        expect(pokemonRoute.component).toBe(PokemonView);
    })

    it('then the mode is history', () => {
        expect(router.mode).toBe('history');
    })
})