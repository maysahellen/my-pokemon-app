import { shallowMount } from "@vue/test-utils";
import ListComponent from "@/components/ListComponent.vue";

describe('Given ListComponent', () => {

    describe('When the component is rendered', () => {

        let wrapper;
        
        beforeEach(() => {
            wrapper = shallowMount(ListComponent, {
                props: {  // Passando a prop pokemons como um array vazio
                    pokemons: []
                }
            });
        });
        
        it('Then the name is ListComponent', () => {
            expect(wrapper.vm.$options.name).toBe('ListComponent');
        })

        it('Then the type of the pokemons prop is array', () => {
            expect(Array.isArray(wrapper.props().pokemons)).toBe(true);
        })

        it('Then the pokemons must be true', () => {
            expect(wrapper.props().pokemons).toEqual([]);
        })

        it('Then the getId must return the id', () => {
            expect(wrapper.vm.getId({ url: 'https://pokeapi.co/api/v2/pokemon/25/' })).toBe('25');
        })

    })
})