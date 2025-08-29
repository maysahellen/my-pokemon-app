import { shallowMount, createLocalVue } from '@vue/test-utils';
import ErrorComponent from "../../../components/ErrorComponent.vue";

const localVue = createLocalVue();

const factory = (propsData) => shallowMount(ErrorComponent, {
    localVue,
    propsData: {
        ...propsData,
    }
});

describe('Given ErrorComponent', () => {

    let wrapper;
    let mockProps;

    beforeEach(() => {
        jest.clearAllMocks();
        mockProps = {
            isError: false
        }
        wrapper = factory(mockProps);
    });

    afterEach(() => {
        wrapper.destroy();
    });

    describe('When the component is rendered', () => {
        
        it('Then the name is ErrorComponent', () => {
            expect(wrapper.vm.$options.name).toBe('ErrorComponent');
        });

        it('Then the type of the isError prop is boolean', () => {
            expect(wrapper.vm.$options.props.isError.type).toBe(Boolean);
        });

        it('Then the isError should be false', () => {
            expect(wrapper.vm.$options.props.isError.default).toBe(false);
        });

        it('Then the error message is "Não foi possível carregar os pokemóns. Tente novamente"', () => {
            expect(wrapper.vm.errorMessage).toBe('Não foi possível carregar os pokemóns. Tente novamente');
        });

        it('Then the button text is "Tentar de novo"', () => {
            expect(wrapper.vm.buttonText).toBe('Tentar de novo');
        });
    });

    describe('When validate methods', () => {

        beforeEach(() => {
            jest.clearAllMocks();
            mockProps = {
                isError: false
            }
            wrapper = factory(mockProps);
            wrapper.vm.retryFetchPokemons();
        });

        afterEach(() => {
            wrapper.destroy();
        });

        describe('And retryFetchPokemons is called', () => {

            it('then retryFetchPokemons should issue an emit', () => {
                expect(wrapper.emitted().retry).toBeTruthy();
            });
        });

    });
});