<script lang="ts">
	import '../global.css';
	import { ThemePicker, ThemeProvider } from '$lib/theme';
</script>

<div class="wrapper">
	<ThemeProvider>
		<slot />
	</ThemeProvider>
	<ThemePicker />
</div>
