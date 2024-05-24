<script lang="ts">
	import { uniqueId } from '$lib/uniqueId';
	import Base from './Field/Base.svelte';
	import Button from './Field/Button.svelte';

	export let type:
		| 'button'
		| 'reset'
		| 'submit'
		// | 'checkbox'
		// | 'radio'
		// | 'select'
		// | 'file'
		// | 'number'
		// | 'textarea'
		| 'password'
		| 'text' = 'text';
	export let label: string = 'Look at me!';
	export let value: string; // Beware of type "image"

	let id: string;
	let hideLabel: boolean;
	$: id = $$props['id'] ?? uniqueId(`${type}-`);
	$: hideLabel = ['button', 'reset', 'submit'].includes(type);
</script>

<div class="wrapper">
	<label class:visually-hidden={hideLabel} for={id}>{label}</label>
	{#if type === 'button' || type === 'reset' || type === 'submit'}
		<Button {type} {id} {value} {...$$restProps} />
	{:else}
		<Base {type} {id} bind:value {...$$restProps} />
	{/if}
</div>

<!-- <form>
    <Field type="text" label="title" />
    <Field type="textarea" label="description" />
    <Field type="radio" values={[{label:"one", value:"1"}, {label:"two", value:"2"}]} />
</form> -->

<style>
	@layer molecules {
		.wrapper {
			position: relative;
		}
		.wrapper:focus-within {
			outline: 1px dotted yellowgreen;
			outline-offset: calc(var(--size-base) / 2);
		}
		label {
			position: absolute;
			transform-origin: 0 -100%;
			transform: scale(0.75) translateY(-1rem);
		}
	}
</style>
