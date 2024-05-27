<script lang="ts">
	import { uniqueId } from '$lib/uniqueId';
	import BaseField from './Field/BaseField.svelte';
	import ButtonField from './Field/ButtonField.svelte';
	import CheckBoxField from './Field/CheckBoxField.svelte';
	import NumberField from './Field/NumberField.svelte';
	import TextAreaField from './Field/TextAreaField.svelte';

	type Type =
		| 'button'
		| 'reset'
		| 'submit'
		| 'checkbox'
		// | 'radio'
		// | 'select'
		// | 'file'
		| 'number'
		| 'textarea'
		| 'password'
		| 'text';
	export let type: Type = 'text';
	export let label: string;
	export let name: string;
	export let value: string; // Beware of type "image"
	let id: string;
	let hideLabel: boolean;
	$: id = $$props['id'] ?? uniqueId(`${type}-`);
	$: hideLabel = ['button', 'reset', 'submit'].includes(type);
	function isAmong<T extends Type>(type: Type, candidates: T[]): type is T {
		return candidates.includes(type as T);
	}
</script>

<div class="wrapper">
	<label class:visually-hidden={hideLabel} for={id}>{label}</label>
	{#if isAmong(type, ['button', 'reset', 'submit'])}
		<ButtonField {id} {name} {type} {value} {...$$restProps} />
	{:else if isAmong(type, ['textarea'])}
		<TextAreaField {id} {name} bind:value {...$$restProps} />
	{:else if isAmong(type, ['number'])}
		<NumberField {id} {name} bind:value {...$$restProps} />
	{:else if isAmong(type, ['text', 'password'])}
		<BaseField {id} {name} {type} bind:value {...$$restProps} />
	{:else if isAmong(type, ['checkbox'])}
		<CheckBoxField {id} {name} bind:value {...$$restProps} />
	{:else}
		<p>Unsupported Field type !</p>
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
			display: flex;
			flex-flow: row;
		}
		.wrapper:focus-within {
			outline: 2px solid var(--color-accent);
			outline-offset: calc(var(--size-base) / 5);
		}
		.wrapper span {
			position: absolute;
			transform-origin: 0 -100%;
			transform: scale(0.75) translateY(-1rem);
		}
	}
</style>
