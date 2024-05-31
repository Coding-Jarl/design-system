<script lang="ts">
	import type { HTMLTextareaAttributes } from 'svelte/elements';
	
	type $$Props = Omit<HTMLTextareaAttributes, 'value'> & {
		type?: 'textarea';
		name: string;
		value: string;
	};
	export let value: $$Props['value'];
</script>

<textarea bind:value {...$$restProps} spellcheck="false" />

<style>
	textarea {
		resize: vertical;
		min-height: calc(var(--size-base) * var(--size-scale));
		max-height: 3rem;
	}
</style>
