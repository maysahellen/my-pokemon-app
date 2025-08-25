import { shallowMount, createLocalVue } from "@vue/test-utils";
import PokemonView from "../../../views/PokemonView.vue";
import { callApi } from "../../../gateways/gateway";
 
const localVue = createLocalVue();
 
const factory = () => shallowMount(PokemonView);
 
jest.mock('../../../gateways/gateway', () => ({
    callApi: jest.fn()
}));
 
describe("Given PokemonView", () => {
 
    describe('When the component is rendered', () => {

        let wrapper;
 
        beforeEach(() => {
            jest.clearAllMocks();
            wrapper = factory();
        });
 
        afterEach(() => {
            wrapper.destroy();
        });

        it('Then the name of the component should be PokemonView', () => {
            expect(wrapper.vm.$options.name).toBe('PokemonView');
        });

        it.each([
            'LoadingComponent',
            'ListComponent',
            'ErrorComponent',
        ])('Then component %s is defined', (component) => {
            expect(wrapper.vm.$options.components[component]).toBeDefined();
        });
        
        it.each([
            ['pokemons', []],
            ['titleImage', '../assets/image 1.svg'],
            ['isLoading', false],
            ['isError', false],
        ])('Then data prop %s is %s', (prop, value) => {
            if(prop === 'titleImage') {
                expect(wrapper.vm[prop]).toBeDefined();
            }
            else {
                expect(wrapper.vm[prop]).toEqual(value);
            }
        });

        it('Then fetchPokemons was called', () => {
            expect(wrapper.vm.fetchPokemons()).toHaveBeenCalled();
        });
    });
 
    describe('When validate methods', () => {
 
        describe('And the call of api is error', () => {

            let wrapper;

            beforeEach(async () => {
                jest.clearAllMocks();
                wrapper = factory();
                callApi.mockRejectedValue(new Error('error'));
                await wrapper.vm.fetchPokemons();
            });
 
            afterEach(() => {
                wrapper.destroy();
            });
            
            it('Then the isError should be true', () => {
                expect(wrapper.vm.isError).toBe(true);
            });
        });
 
        describe('And the call of api is sucess', () => {
 
            let mockData;
            let wrapper;
 
            beforeEach(async () => {
                jest.clearAllMocks();
                wrapper = factory();
                mockData = [{ name: 'Pikachu' }];
                callApi.mockResolvedValue(mockData);
                await wrapper.vm.fetchPokemons();
            });
 
            afterEach(() => {
                wrapper.destroy();
            });
 
            it('Then the pokemons should be an array with pokemon data', () => {
                expect(wrapper.vm.pokemons).toEqual(mockData);
            });
 
        });
    });
});
 