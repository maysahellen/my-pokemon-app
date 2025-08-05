import { shallowMount } from "@vue/test-utils";
import LoadingComponent from "@/components/LoadingComponent.vue";

describe('Given LoadingComponent', () => {

    describe('When the component is rendered', () => {

        let wrapper;
        let name;

        beforeEach(() => {
            wrapper = shallowMount(LoadingComponent);
        });

        it('Then the name of the component is LoadingComponent', () => {
            name = wrapper.vm.$options.name;
            expect(name).toBe('LoadingComponent');
        });

        it('Then the type of the isLoading prop is Boolean', () => {
            expect(typeof wrapper.props().isLoading).toBe('boolean');
        });

        it('Then the default of the isLoading prop is false', () => {
            expect(wrapper.props().isLoading).toBe(false);
        });
    });
});