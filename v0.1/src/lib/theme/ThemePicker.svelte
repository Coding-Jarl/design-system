<script lang="ts">
	import { theme } from './theme';
</script>

<div class="wrapper">
	<fieldset>
		<legend>Colors</legend>
		<label>
			Primary
			<input type="color" bind:value={$theme.color.primary} />
		</label>

		<label>
			Secondary
			<input type="color" bind:value={$theme.color.secondary} />
		</label>

		<label>
			Accent
			<input type="color" bind:value={$theme.color.accent} />
		</label>
	</fieldset>
	<fieldset>
		<legend>Fonts</legend>
		<label>
			Headers
			<input type="text" bind:value={$theme.font.header} />
		</label>
		<label>
			Base text
			<input type="text" bind:value={$theme.font.baseText} />
		</label>
	</fieldset>
</div>

<style>
	.wrapper {
		--light: #f2f2f2;
		--dark: #1d1e22;

		position: fixed;
		bottom: 0;
		right: 0;
		background: var(--light);
		color: var(--dark);

		@media (prefers-color-scheme: dark) {
			background: var(--dark);
			color: var(--light);
		}
	}
</style>
