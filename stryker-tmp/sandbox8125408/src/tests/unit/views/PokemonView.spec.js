// @ts-nocheck
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

        let wrapper;;
 
        beforeEach(() => {
            jest.clearAllMocks();
            wrapper = factory();
        });
 
        afterEach(() => {
            wrapper.destroy();
        });
 
        it('Then should be a title image in the data', () => {
            expect(wrapper.vm.titleImage).toBeDefined();
        });
 
        it('Then the name of the component should be PokemonView', () => {
            expect(wrapper.vm.$options.name).toBe('PokemonView');
        });
 
        it('Then isLoading should be false', () => {
            expect(wrapper.vm.isLoading).toBe(false);
        });
 
        it('Then isError should be false', () => {
            expect(wrapper.vm.isError).toBe(false);
        });

        it.each([
            'LoadingComponent',
            'ListComponent',
            'ErrorComponent',
        ])('Then component %s is defined', (component) => {
            expect(wrapper.vm.$options.components[component]).toBeDefined();
        });
    });
 
    describe('When validate methods', () => {
 
        beforeEach(async () => {
            jest.clearAllMocks();
            wrapper = factory();
            callApi.mockRejectedValue(new Error('Mocked error'));
            await wrapper.vm.all();
        });
 
        afterEach(() => {
            wrapper.destroy();
        });
 
        describe('And the call of api is error', () => {
            
            it('Then the isError should be true', () => {
                expect(wrapper.vm.isError).toBe(true);
            });
        });
 
        describe('And the call of api is sucess', () => {
 
            let mockData;
            mockData = [{ name: 'Pikachu' }];
 
            beforeEach(async () => {
                jest.clearAllMocks();
                wrapper = factory();
                callApi.mockResolvedValue(mockData);
                await wrapper.vm.all();
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
 