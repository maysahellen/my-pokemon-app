// @ts-nocheck
import Router from 'vue-router'
import router from '../../router.js'
import PokemonView from '@/views/PokemonView.vue'
import { createLocalVue } from '@vue/test-utils'
 
describe('Given router', () => {

    const localVue = createLocalVue(); 
    localVue.use(Router);
    
    describe('When /pokemon is accessed', () => {

        let routes;
        let pokemonRoute;
 
        beforeEach(() => {
            routes = router.options.routes;
            pokemonRoute = routes.find(route => route.path === '/pokemon');
        });
 
        it('Then the route was defined', () => {
            expect(pokemonRoute).toBeDefined(); 
        });
 
        it('Then the name of the route is pokemon', () => {
            expect(pokemonRoute.name).toBe('pokemon'); 
        });
 
        it('Then the route component is PokemonView', () => {
            expect(pokemonRoute.component).toBe(PokemonView);
        });

        it('Then the mode is history', () => {
            expect(router.options.mode).toBe('history');
        });
    });
    
    describe('When / is acessed', () => {

        let routes;
        let initialRoute;

        beforeEach(() => {
            routes = router.options.routes;
            initialRoute = routes.find(route => route.path === '/');
        });

        it('Then is redirected to /pokemon', () => {
            expect(initialRoute.redirect).toBe('/pokemon');
        });
    });
});