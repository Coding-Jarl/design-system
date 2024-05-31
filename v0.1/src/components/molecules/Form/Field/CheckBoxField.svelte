<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';

	type $$Props = Omit<HTMLInputAttributes, 'type' | 'value'> & {
		type?: 'checkbox';
		name: string;
		value: boolean;
	};
	export let value: $$Props['value'];
</script>

<input type="checkbox" bind:checked={value} {...$$restProps} />

<style>
</style>
