import Router from 'vue-router'
import router from '../router.js'
import PokemonView from '@/views/PokemonView.vue'
import { createLocalVue } from '@vue/test-utils' // funcao que cria instancia local do vue
 
describe('when /pokemon is accessed', () => {
 
    const localVue = createLocalVue(); // cria nova instancia do vue para o teste
    localVue.use(Router); // para a instancia do vue usar o vue-router
    let routes; // armazena rotas
    let pokemonRoute;
 
    beforeEach(() => {
        routes = router.options.routes; // armazena o array de rotas da aplicacao
        pokemonRoute = routes.find(route => route.path === '/pokemon');
    })
 
    it('then the route was defined', () => {
        expect(pokemonRoute).toBeDefined(); // confere se a rota foi definida
    })
 
    it('then the name of the route is pokemon', () => {
        expect(pokemonRoute.name).toBe('pokemon'); // confere se o nome está certo
    })
 
    it('then the route component is', () => {
        expect(pokemonRoute.component).toBe(PokemonView); // confere se o componente está certo
    })
})