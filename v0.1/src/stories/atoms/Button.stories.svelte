<script lang="ts" context="module">
	import type { Meta } from '@storybook/svelte';
	import Button from '../acme/Button.svelte';

	export const meta = {
		title: 'Atoms/Button',
		component: Button,
		tags: ['autodocs'],
		argTypes: {
			label: {
				control: { type: 'text' }
			},
			primary: {
				control: { type: 'boolean' }
			},
			backgroundColor: { control: 'color' },
			size: {
				control: { type: 'select' },
				options: ['small', 'medium', 'large']
			}
		}
	} satisfies Meta<Button>;
</script>

<script lang="ts">
	import { Story, Template } from '@storybook/addon-svelte-csf';
	import Mondrian from '../../components/Mondrian.svelte';
	import GlassPane from '../../components/GlassPane.svelte';
	import ThemeProvider from '$lib/theme/ThemeProvider.svelte';
	import ThemePicker from '$lib/theme/ThemePicker.svelte';
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

<Story name="Isolation">
	<Button primary label="Button" />
</Story>

<Story
	name="Base"
	args={{ label: 'Button', primary: true }}
	parameters={{ docs: { source: { code: '<Button variant="secondary" />' } } }}
/>

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
