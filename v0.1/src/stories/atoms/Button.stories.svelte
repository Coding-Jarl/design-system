<script lang="ts" context="module">
	import type { Meta } from '@storybook/svelte';
	import TemplateWithTheme from '../templates/TemplateWithTheme.svelte';
	import Button from '../acme/Button.svelte';

	export const meta = {
		title: 'Atoms/Button',
		component: Button,
		tags: ['autodocs'],
		argTypes: {
			label: {
				control: 'text'
			},
			primary: {
				control: 'boolean',
				defaultValue: false
			},
			backgroundColor: { control: 'color' },
			size: {
				control: 'select',
				options: ['small', 'medium', 'large']
			}
		},
		parameters: {
			backgrounds: {
				default: 'dark',

				values: [
					{ name: 'light', value: '#f2f2f2' },
					{ name: 'dark', value: '#1d1e22' }
				]
			},

			layout: 'fullscreen'
		},

		decorators: [
			(_story, ctx) => ({
				Component: TemplateWithTheme,
				props: ctx.args
			})
		]
	} satisfies Meta<Button>;
</script>

<script lang="ts">
	import { Story, Template } from '@storybook/addon-svelte-csf';
	import type { Parameters } from '@storybook/svelte';

	function addCode(code: string, parameters: Parameters = {}): Parameters {
		return Object.assign({}, parameters, { docs: { source: { code } } });
	}
</script>

<Template let:args>
	<Button {...args} />
</Template>

<Story name="Default" args={{ label: 'Button' }} />

<Story name="Primary">
	<Button primary label="Button" />
</Story>

<Story name="Large">
	<Button label="Button" size="large" />
</Story>

<Story
	name="Large With Template"
	args={{ label: 'Button', size: 'large' }}
	parameters={addCode(`<Button label="Button" size="large" />`)}
/>

<Story
	name="Background Color With Template"
	args={{ label: 'Button', backgroundColor: 'green' }}
	parameters={addCode(`<Button label="Button" backgroundColor="green" />`)}
/>
