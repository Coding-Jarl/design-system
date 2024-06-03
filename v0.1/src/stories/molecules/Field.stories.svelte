<script lang="ts" context="module">
	import type { Meta } from '@storybook/svelte';
	import Field from '../../lib/components/molecules/Form/Field.svelte';

	export const meta = {
		title: 'Molecules/Field',
		component: Field,
		tags: ['autodocs'],
		argTypes: {
			label: {
				control: { type: 'text' }
			},
			type: {
				control: { type: 'select', options: ['text'] }
			},
			value: {
				control: { type: 'text' }
			}
		}
	} satisfies Meta<Field>;
</script>

<script lang="ts">
	import { Story, Template } from '@storybook/addon-svelte-csf';
	import Mondrian from '../../lib/components/Mondrian.svelte';
	import GlassPane from '../../lib/components/GlassPane.svelte';
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
					<Field {...args} />
				</GlassPane>
			</div>
		</div>
	</ThemeProvider>
	<ThemePicker />
</Template>

<Story name="Isolation">
	<Field />
</Story>

<Story
	name="Base"
	args={{ label: 'Button', primary: true }}
	parameters={{ docs: { source: { code: '<Button variant="secondary" />' } } }}
/>

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
