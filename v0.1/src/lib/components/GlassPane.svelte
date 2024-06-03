<script lang="ts">
</script>

<div class="wrapper">
	<slot />
</div>

<style>
	.wrapper {
		--glass: color-mix(in srgb, var(--fx-glass-color) var(--fx-glass-opacity), transparent);

		background-color: var(--glass);
		border-radius: var(--size-base);
		border: calc(var(--size-base) / 10) solid var(--glass);
		display: grid;
		place-items: center;
		backdrop-filter: blur(var(--size-base));
		height: 100%;
	}
</style>
