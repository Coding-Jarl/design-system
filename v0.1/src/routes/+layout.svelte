<script>
	import {ThemePicker, ThemeProvider} from '../lib/theme';
</script>

<div class="wrapper">
	<ThemeProvider>
		<slot />
	</ThemeProvider>
	<ThemePicker />
</div>

<style>
	:global(html) {
		background-color: #1d1e22;
		color: beige;
		color-scheme: dark light;
	}
	:global(body) {
		min-height: 100vh;
	}
</style>
