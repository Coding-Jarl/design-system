<script lang="ts">
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
</script>

<label class="wrapper">
	{#if type === 'button' || type === 'reset' || type === 'submit'}
		<span class="visually-hidden">{label}</span>
		<Button {type} {value} {...$$restProps} />
	{:else if type === 'text' || type === 'password' || type === 'number'}
		<span>{label}</span>
		<Base {type} bind:value {...$$restProps} />
	{/if}
</label>

<!-- <form>
    <Field type="text" label="title" />
    <Field type="textarea" label="description" />
    <Field type="radio" values={[{label:"one", value:"1"}, {label:"two", value:"2"}]} />
</form> -->

<style>
	@layer molecules {
		label {
			position: relative;
		}
		label:focus-within {
			outline: 1px dotted yellowgreen;
			outline-offset: calc(var(--size-base) / 2);
		}
		span {
			position: absolute;
			transform-origin: 0 -100%;
			transform: scale(0.75) translateY(-1rem);
		}
	}
</style>
