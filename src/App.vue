<script setup lang="ts">
	// Vendor
	import { computed } from 'vue';

	// Components
	import ParentThing from './components/ParentThing.vue';
	import ChildThing from './components/ChildThing.vue';

	const module = 'app-container';

	// Computed
	const moduleClasses = computed(() => [module, 'p-4']);
</script>

<template>
	<div :class="moduleClasses">
		<h1 class="text-3xl font-bold">Vue 3 composition api</h1>
		<div>
			<h2 class="text-xl font-bold">Composable</h2>
			<ParentThing>
				<ChildThing />
			</ParentThing>
		</div>
	</div>
</template>
