<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';

	type $$Props = Omit<HTMLInputAttributes, 'type' | 'value'> & {
		type: 'button' | 'reset' | 'submit';
		name: string;
		value: string;
	};
	export let value: $$Props['value'];
</script>

<input {value} {...$$restProps} />

<style>
</style>
