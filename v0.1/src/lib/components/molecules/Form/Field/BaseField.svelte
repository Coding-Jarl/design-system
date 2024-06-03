<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';

	type $$Props = Omit<HTMLInputAttributes, 'type' | 'value'> & {
		type: 'text' | 'password';
		name: string;
		value: string;
	};
	export let value: $$Props['value'];
</script>

<input bind:value {...$$restProps} />

<style>
</style>
