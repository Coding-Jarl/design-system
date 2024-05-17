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
	import { Story } from '@storybook/addon-svelte-csf';
	import TemplateWithTheme from '../templates/TemplateWithTheme.svelte';
</script>

<TemplateWithTheme />

<Story name="Isolation">
	<Button primary label="Button" />
</Story>

<Story
	name="Base"
	args={{ label: 'Button', primary: true }}
	parameters={{ docs: { source: { code: '<Button variant="secondary" />' } } }}
/>

