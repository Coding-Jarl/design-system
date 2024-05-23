<script lang="ts" context="module">
	import type { Meta } from '@storybook/svelte';
	import Button from '../acme/Button.svelte';
	import TemplateWithTheme from '../templates/TemplateWithTheme.svelte';
	import { Story, Template } from '@storybook/addon-svelte-csf';
	import { defaultParameters, injectParameters } from '../helpers';

	export const meta = {
		title: 'Atoms/Button',
		component: Button,
		tags: ['autodocs'],
		argTypes: {
			label: { control:'text' },
			primary: { control: 'boolean' },
			backgroundColor: { control: 'color' },
			size: {
				control: 'select',
				options: ['small', 'medium', 'large']
			}
		},
		parameters: {...defaultParameters, layout: 'centered'},
		decorators: [(_story, ctx)=>{
			if(ctx.name==="Isolation") return {Component: Button, props: ctx.args}
			return {Component: TemplateWithTheme, props: ctx.args}
		}]
	} satisfies Meta<Button>;
</script>

<Template let:args>
	<Button {...args}/>
</Template>

<Story name="Isolation" args={{ label: 'Button', primary: true }} parameters={injectParameters('<Button label="Button" primary />')} />

<Story
	name="Base"
	args={{ label: 'Button', primary: true }}
	parameters={injectParameters('<Button label="Button" primary />')}
/>
