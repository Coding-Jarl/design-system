<script lang="ts">
	export let value;
</script>

<textarea {value} {...$$restProps} spellcheck="false" />

<style>
	textarea {
		resize: vertical;
		min-height: calc(var(--size-base) * var(--size-scale));
		max-height: 3rem;
	}
</style>
