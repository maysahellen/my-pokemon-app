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

    describe('When the component is rendered without props', () => {

        let wrapper;

        beforeEach(() => {
            wrapper = factory();
        });

        afterEach(() => {
            wrapper.destroy();
        });

        it('Then the default of the isLoading prop should be false', () => {
            expect(wrapper.props().isLoading).toBe(false); 
        });

        it('Then the loading should not be rendered', () => {
            expect(wrapper.find('.loading').exists()).toBe(false);
        });
    });

    describe('When isLoading is false', () => {

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

        it('Then the isLoading should be false', () => {
            expect(wrapper.props().isLoading).toBe(false);
        });

        it('Then there must be a loading image in the data', () => {
            expect(wrapper.vm.loadingImage).toBeDefined();
        });

        it('Then the loading should not be rendered', () => {
            expect(wrapper.find('.loading').exists()).toBe(false);
        });
    });

    describe('When isLoading is true', () => {

        let wrapper;
        let isLoadingProp;
        let mockProps;

        beforeEach(() => {
            jest.clearAllMocks();
            mockProps = {
                isLoading: true
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

        it('Then the isLoading should be true', () => {
            expect(wrapper.props().isLoading).toBe(true);
        });

        it('Then there must be a loading image in the data', () => {
            expect(wrapper.vm.loadingImage).toBeDefined();
        });

        it('Then the loading should be rendered', () => {
            expect(wrapper.find('.loading').exists()).toBe(true);
        });
    });
});
