<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';

	type $$Props = Omit<HTMLInputAttributes, 'type'> & {
		type: 'text' |'password';
	};
	export let type: $$Props['type'];
	export let value: $$Props['value'] = undefined;
</script>

<input {type} {value} {...$$restProps} />

<style>
</style>
