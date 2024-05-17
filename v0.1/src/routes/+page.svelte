<script>
	import { theme } from '../lib/theme';
	import GlassPane from '../components/GlassPane.svelte';
	import Mondrian from '../components/Mondrian.svelte';
</script>

<div class="wrapper">
	<h1>Welcome to SvelteKit</h1>
	<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
	<ul>
		<li>{$theme.color.primary}</li>
		<li>{$theme.color.secondary}</li>
		<li>{$theme.color.accent}</li>
		<li>{$theme.font.header}</li>
		<li>{$theme.font.baseText}</li>
	</ul>
	<div class="display">
		<div class="bg">
			<Mondrian />
		</div>
		<div class="fg">
			<GlassPane>Test</GlassPane>
		</div>
	</div>
</div>

<style>
	p {
		color: var(--color-primary);
	}
	.display {
		position: relative;
		display: grid;
		place-items: center;
		width: 50%;
		aspect-ratio: 1;
	}
	.display .bg {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: -1;
	}
	.display .fg {
		width: 75%;
		aspect-ratio: 1;
	}
</style>
