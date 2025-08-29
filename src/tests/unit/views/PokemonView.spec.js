import { shallowMount, createLocalVue } from "@vue/test-utils";
import PokemonView from "../../../views/PokemonView.vue";
import { callApi } from "../../../gateways/gateway";
 
const localVue = createLocalVue();
 
const factory = () => shallowMount(PokemonView);
 
jest.mock('../../../gateways/gateway', () => ({
    callApi: jest.fn()
}));
 
describe("Given PokemonView", () => {

    let wrapper;

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = factory();
    });
 
 
    describe('When the component is rendered', () => {

        let fetchPokemonsSpy;
 
        beforeEach(() => {
            jest.clearAllMocks();
            fetchPokemonsSpy = jest.spyOn(PokemonView.methods, 'fetchPokemons');
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
        
        it('Then the pokemon array is empty', () => {
            expect(PokemonView.data().pokemons).toEqual([]);
        });

        it('Then the title image is defined', () => {
            expect(wrapper.vm.titleImage).toBeDefined();
        });

        it('Then the isLoading is false', () => {
            expect(PokemonView.data().isLoading).toBe(false);
        });

        it('Then the isError is false', () => {
            expect(PokemonView.data().isError).toBe(false);
        });

        // outro when pro mounted
        it('Then fetchPokemons is called', () => {
            expect(fetchPokemonsSpy).toHaveBeenCalled();
        });
    });

      describe('When validate computed', () => {

        let wrapper;
 
        beforeEach(() => {
            jest.clearAllMocks();
            wrapper = factory();
        });
 
        afterEach(() => {
            wrapper.destroy();
        });

        test.each([
            { pokemons: ['Pikachu'], isLoading: false, isError: false, expected: true },
            { pokemons: ['Pikachu'], isLoading: true, isError: false, expected: false },
            { pokemons: ['Pikachu'], isLoading: false, isError: true, expected: false },
            { pokemons: [], isLoading: true, isError: true, expected: false },
        ])('When pokemons: $pokemons, isLoading: $isLoading, isError: $isError, then showPokemons should be $expected', ({ pokemons, isLoading, isError, expected }) => {
            wrapper.setData({ pokemons, isLoading, isError });
            expect(wrapper.vm.showPokemons).toBe(expected);
        });
    });
 
    describe('When validate the method fetchPokemons', () => {

        describe('And the call of fetchPokemons starts', () => {

            // colocar um beforeeach no given so pra limpar o mock
            beforeEach(() => {
                    wrapper.vm.isLoading = false;
                    callApi.mockImplementation(() => new Promise(() => {}));
                    wrapper.vm.fetchPokemons();
                });

            it('Then isLoading is true in the beggining', () => {
                expect(wrapper.vm.isLoading).toBe(true);
            });
        });
 
        describe('And the call of api is error', () => {

            let wrapper;

            beforeEach( () => {
                jest.clearAllMocks();
                wrapper = factory();
                callApi.mockRejectedValue(new Error('error'));
                wrapper.vm.fetchPokemons();
            });
 
            afterEach(() => {
                wrapper.destroy();
            });

            it('Then the isError should be true', () => {
                expect(wrapper.vm.isError).toBe(true);
            });

            it('Then the isLoading should be false after error', () => {
                expect(wrapper.vm.isLoading).toBe(false);
            });
        });
 
        describe('And the call of api is sucess', () => {
 
            let mockData;
            let wrapper;
 
            beforeEach(() => {
                jest.clearAllMocks();
                wrapper = factory();
                mockData = [{ name: 'Pikachu' }];
                callApi.mockResolvedValue(mockData);
                wrapper.vm.fetchPokemons();
            });
 
            afterEach(() => {
                wrapper.destroy();
            });
 
            it('Then the pokemons should be an array with pokemon data', () => {
                expect(wrapper.vm.pokemons).toEqual(mockData);
            }); 

            it('Then isLoading is false', () => {
                expect(wrapper.vm.isLoading).toBe(false);
            });
        });
    });

    describe('When validade the method handleTryAgain', () => {

        let wrapper;
        let fetchPokemonsSpy;
        
        beforeEach(async () => {
            jest.clearAllMocks();
            wrapper = factory();
            fetchPokemonsSpy = jest.spyOn(wrapper.vm, 'fetchPokemons');
            await wrapper.vm.handleTryAgain();
        });
 
        afterEach(() => {
            wrapper.destroy();
        });

        it('Then fetchPokemons should be called', () => {
            expect(fetchPokemonsSpy).toHaveBeenCalled();
        });           
    });
});