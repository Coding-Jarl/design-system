<script lang="ts">
	import GlassPane from '$lib/components/GlassPane.svelte';
	import Mondrian from '$lib/components/Mondrian.svelte';
	import Form from '$lib/components/molecules/Form/Form.svelte';
	import type { FieldProps } from '$lib/components/molecules/Form/Field.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const fields = [
		{
			name: 'text',
			label: 'text',
			type: 'text',
			value: 'I haz value'
		},
		{
			name: 'textarea',
			label: 'textarea',
			type: 'textarea',
			value: 'I haz value'
		},
		{
			name: 'number',
			label: 'number',
			type: 'number',
			value: '0'
		},
		{
			name: 'checkbox',
			label: 'checkbox',
			type: 'checkbox',
			value: false
		}
	] as const satisfies Omit<FieldProps, 'errors'>[];
</script>

<div class="wrapper">
	<div class="display">
		<div class="bg">
			<Mondrian />
		</div>
		<div class="fg">
			<GlassPane>
				<Form
					{fields}
					formData={data.form}
					submitText="Go!"
					resetText="Je me suis planté, je reset"
				/>
			</GlassPane>
		</div>
	</div>
</div>

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
