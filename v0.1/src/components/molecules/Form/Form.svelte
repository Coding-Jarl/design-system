<script lang="ts" generics="T extends Record<string,unknown>, K extends keyof T & string">
	import SuperDebug, { superForm, type SuperValidated } from 'sveltekit-superforms';

	import Field, { type FieldProps } from './Field.svelte';
	type Field = Omit<FieldProps, 'errors' | 'name'> & {
		name: K;
	};
	export let fields: Field[] = [];

	export let formData: SuperValidated<T>;

	const { form, enhance, errors } = superForm(formData, {});
</script>

{#if formData}
	<form method="POST" use:enhance>
		{#each fields as field}
			<Field {...field} bind:value={$form[field.name]} errors={$errors} />
		{/each}
	</form>
	<SuperDebug data={$form} />
{:else}
	<p>Unsupported structure and/or formData</p>
{/if}

<style></style>
