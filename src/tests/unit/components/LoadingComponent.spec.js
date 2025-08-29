import { shallowMount } from "@vue/test-utils";
import LoadingComponent from "../../../components/LoadingComponent.vue";
import { createLocalVue } from '@vue/test-utils'

const localVue = createLocalVue();

const factory = (propsData) => shallowMount(LoadingComponent, {
    localVue,
    propsData: {
        ...propsData,
    }
});

describe('Given LoadingComponent', () => {

    let wrapper;;
    let mockProps;

    beforeEach(() => {
        jest.clearAllMocks();
        mockProps = {
            isLoading: false
        }
        wrapper = factory(mockProps);
    });

    afterEach(() => {
        wrapper.destroy();
    });

    describe('When the component is rendered', () => {

        it('Then the name of the component is LoadingComponent', () => {
            expect(wrapper.vm.$options.name).toBe('LoadingComponent');
        });

        it('Then the type of the isLoading prop is Boolean', () => {
            expect(wrapper.vm.$options.props.isLoading.type).toBe(Boolean);
        });

        it('Then the isLoading is false', () => {
            expect(wrapper.vm.$options.props.isLoading.default).toBe(false);
        });

        it('Then there must be a loading image in the data', () => {
            expect(wrapper.vm.loadingImage).toBeDefined();
        });
    });
});