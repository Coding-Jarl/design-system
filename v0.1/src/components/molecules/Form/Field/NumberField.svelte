<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';
	type $$Props = Omit<HTMLInputAttributes, 'type' | 'value'> & {
		type?: 'number';
		name: string;
		value: number;
	};
	export let value: $$Props['value'];
</script>

<input type="number" bind:value {...$$restProps} />

<style>
</style>
