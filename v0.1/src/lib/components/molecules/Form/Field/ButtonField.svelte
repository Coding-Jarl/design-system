<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';
	type $$Props = Omit<HTMLButtonAttributes, 'type' | 'value'> & {
		type: 'button' | 'reset' | 'submit';
		label: string;
	};
	export let label: $$Props['label'];
	export let type: $$Props['type'];
</script>

<button {type} {...$$restProps}>{label}</button>

<style>
</style>
