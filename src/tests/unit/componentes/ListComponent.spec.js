import { shallowMount, createLocalVue } from '@vue/test-utils';
import ListComponent from "@/components/ListComponent.vue";

const localVue = createLocalVue();

const factory = (propsData) => shallowMount(ListComponent, {
    localVue,
    propsData: {
        ...propsData,
    }
});

describe('Given ListComponent', () => {

    describe('When the component is rendered', () => {

        let wrapper;
        let mockProps;
        let pokemonsProp;
        
        beforeEach(() => {
            jest.clearAllMocks();
            mockProps = {
                pokemons: []
            }
            wrapper = factory(mockProps);
            pokemonsProp = wrapper.vm.$options.props.pokemons
        });

        afterEach(() => {
            wrapper.destroy();
        });
        
        it('Then the name is ListComponent', () => {
            expect(wrapper.vm.$options.name).toBe('ListComponent');
        });

        it('Then the type of the pokemons prop is array', () => {
            expect(pokemonsProp.type).toBe(Array);
        });

        it('Then the pokemons must be required', () => {
            expect(pokemonsProp.required).toBe(true);
        });

        it('Then the getId must return the id', () => {
            expect(wrapper.vm.getId({ url: 'https://pokeapi.co/api/v2/pokemon/25/' })).toBe('25');
        });
    });
});