<script setup lang="ts">
	// Vendor
	import { computed } from 'vue';

	// Composable
	import { useTestComposable } from '../composable/test';

	const module = 'parent-thing';

	// Composable
	const { foo, toggleFoo } = useTestComposable(module);

	// Computed
	const moduleClasses = computed(() => ({
		[module]: true,
		'bg-slate-800': true,
		'p-4': true,
	}));
</script>

<template>
	<div :class="moduleClasses">
		<button class="bg-violet-200 text-violet-900 p-2 rounded" @click="toggleFoo">
			Toggle foo
		</button>
		<div>Foo in parent: {{ foo }}</div>
		<slot />
	</div>
</template>

<style lang="scss">
	$module: 'parent-thing';

	.#{$module} {
	}
</style>
