<script lang="ts">
	import Mondrian from '../../components/Mondrian.svelte';
	import GlassPane from '../../components/GlassPane.svelte';
	import { ThemePicker, ThemeProvider } from '$lib/theme';
</script>

<ThemeProvider>
	<div class="display">
		<div class="bg">
			<Mondrian />
		</div>
		<div class="fg">
			<GlassPane>
				<slot />
			</GlassPane>
		</div>
	</div>
</ThemeProvider>
<ThemePicker />

<style>
	.display {
		position: relative;
		display: grid;
		place-items: center;
		width: 100dvmin;
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
