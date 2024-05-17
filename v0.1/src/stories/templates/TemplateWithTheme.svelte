<script>
	import { Template } from '@storybook/addon-svelte-csf';
	import Mondrian from '../../components/Mondrian.svelte';
	import GlassPane from '../../components/GlassPane.svelte';
	import Button from '../acme/Button.svelte';
	import { ThemePicker, ThemeProvider } from '$lib/theme';
</script>

<Template let:args>
	<ThemeProvider>
		<div class="display">
			<div class="bg">
				<Mondrian />
			</div>
			<div class="fg">
				<GlassPane>
					<Button {...args} />
				</GlassPane>
			</div>
		</div>
	</ThemeProvider>
	<ThemePicker />
</Template>

<style>
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
