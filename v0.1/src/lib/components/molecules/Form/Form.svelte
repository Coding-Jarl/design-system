<script lang="ts" generics="T extends Record<string,unknown>, K extends keyof T & string">
	import { onMount } from 'svelte';

	import { superForm, type SuperValidated } from 'sveltekit-superforms';

	import Field, { type FieldProps } from './Field.svelte';
	type Field = Omit<FieldProps, 'errors' | 'name'> & {
		name: K;
	};
	export let fields: Field[] = [];
	export let formData: SuperValidated<T>;
	export let resetText: string | undefined = undefined;
	export let submitText: string = 'Submit';

	const { form, enhance, errors } = superForm(formData, {});

	onMount(() => {
		for (const field of fields) {
			$form[field.name] = field.value;
		}
	});
</script>

{#if formData}
	<form method="POST" use:enhance>
		{#each fields as field}
			<Field {...field} bind:value={$form[field.name]} errors={$errors} />
		{/each}
		{#if resetText}
			<Field type="reset" label={resetText} name="reset" value="" />
		{/if}
		<Field type="submit" label={submitText} name="submit" value="" />
	</form>
{:else}
	<p>Unsupported structure and/or formData</p>
{/if}

<style></style>
