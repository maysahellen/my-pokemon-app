import router from "../router.js"; // arquivo das rotas
import PokemonView from "@/views/PokemonView.vue"; // componente pai da rota que vai ser testada
import { mount } from "@vue/test-utils"; // essa funcao permite montar componentes para teste
import App from "@/App.vue";

describe('when /pokemon is accessed', () => {

    let wrapper; // guarda componente montado no teste

    beforeEach(async () => {
        wrapper = mount(App, { // monta o componente pai da aplicacao 
            global: {
                plugins: [router] // para o App usar o router
            }
        })
        await router.push('/pokemon'); // simula a navegacao para a rota
    })

    it('then the PokemonView component is rendered', async () => {
        expected(wrapper.findComponent(PokemonView).exists()).toBe(true); // o componente pai da rota testada deve estar presente no componente montado no spec
    })
})