<script setup lang="ts">
	// Vendor
	import { computed } from 'vue';

	// Composable
	import { useTestComposable } from '../composable/test';

	const module = 'child-thing';

	// Composable
	const { foo, bar, baz } = useTestComposable(module);

	// Computed
	const moduleClasses = computed(() => ({
		[module]: true,
		'bg-slate-900/20': true,
		'mt-4': true,
		'p-4': true,
	}));
</script>

<template>
	<div :class="moduleClasses">
		<div>Foo in child: {{ foo }}</div>
		<div>Bar in child: {{ bar }}</div>
		<div>Baz in child: {{ baz }}</div>
	</div>
</template>

<style lang="scss">
	$module: 'child-thing';

	.#{$module} {
	}
</style>
