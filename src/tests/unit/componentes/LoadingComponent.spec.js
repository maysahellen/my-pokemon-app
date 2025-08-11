import { shallowMount } from "@vue/test-utils";
import LoadingComponent from "@/components/LoadingComponent.vue";
import { createLocalVue } from '@vue/test-utils'

const localVue = createLocalVue();

const factory = (propsData) => shallowMount(LoadingComponent, {
    localVue,
    propsData: {
        ...propsData,
    }
});

describe('Given LoadingComponent', () => {

    describe('When the component is rendered', () => {

        let wrapper;
        let isLoadingProp;
        let mockProps;

        beforeEach(() => {
            jest.clearAllMocks();
            mockProps = {
                isLoading: false
            }
            wrapper = factory(mockProps);
            isLoadingProp = wrapper.vm.$options.props.isLoading;
        });

        afterEach(() => {
            wrapper.destroy();
        });

        it('Then the name of the component is LoadingComponent', () => {
            expect(wrapper.vm.$options.name).toBe('LoadingComponent');
        });

        it('Then the type of the isLoading prop is Boolean', () => {
            expect(isLoadingProp.type).toBe(Boolean);
        });

        it('Then the default of the isLoading prop is false', () => {
            expect(wrapper.props().isLoading).toBe(false);
        });

        it('Then there must be a loading image in the data', () => {
            expect(wrapper.vm.loadingImage).toBeDefined();
        });
    });
});