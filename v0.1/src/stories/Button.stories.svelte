<script lang="ts" context="module">
	import type { Meta } from '@storybook/svelte';
	import Button from './acme/Button.svelte';

	export const meta = {
		title: 'Stories in Svelte/Button',
		component: Button,
		tags: ['autodocs'],
		argTypes: {
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
</script>

<Template let:args>
	<Button {...args} />
</Template>

<Story name="Primary">
	<Button primary label="Button" />
</Story>
