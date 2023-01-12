// Vendor
import { computed, ref, unref } from 'vue';

export function useTestComposable(componentName: string) {
	// Refs
	const foo = ref(false);
	const bar = ref(unref(componentName));

	// Computed
	const baz = computed(() => `${bar.value} is awesome`);

	// Methods
	function toggleFoo() {
		foo.value = !foo.value;
	}

	return {
		foo,
		bar,
		baz,
		toggleFoo,
	};
}
