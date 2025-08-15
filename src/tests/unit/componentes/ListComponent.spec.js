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

    let wrapper;
    let mockProps;

    beforeEach(() => {
        jest.clearAllMocks();
        mockProps = {
            pokemons: []
        }
        wrapper = factory(mockProps);
    });

    afterEach(() => {
        wrapper.destroy();
    });

    describe('When the component is rendered', () => {
        
        it('Then the name is ListComponent', () => {
            expect(wrapper.vm.$options.name).toBe('ListComponent');
        });

        it('Then the type of the pokemons prop is array', () => {
            expect(wrapper.vm.$options.props.pokemons.type).toBe(Array);
        });

        it('Then the pokemons must be required', () => {
            expect(wrapper.vm.$options.props.pokemons.required).toBe(true);
        });

        describe('And the function getId is called', () => {

            it('Then the getId must return the id', () => {
                expect(wrapper.vm.getId({ url: 'https://pokeapi.co/api/v2/pokemon/25/' })).toBe('25');
            });
        });
    });
});