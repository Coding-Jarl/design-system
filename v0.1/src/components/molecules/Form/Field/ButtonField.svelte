<script lang="ts">
	export let type = 'button' || 'reset' || 'submit';
	export let value;
</script>

<input {type} {value} {...$$restProps} />

<style>
</style>
