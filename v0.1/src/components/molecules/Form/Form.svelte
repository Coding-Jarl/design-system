<script lang="ts" generics="T extends Record<string,unknown>">
	import SuperDebug, { superForm, type SuperValidated } from 'sveltekit-superforms';
	import type { ComponentProps } from 'svelte';
	import Field from './Field.svelte';

	export let fields: ComponentProps<Field>[] = [];
	export let formData: SuperValidated<T>;

	const { form, enhance, errors } = superForm(formData, {});
</script>

{#if formData}
	<form method="POST" use:enhance>
		{#each fields as field}
			<Field {...field} bind:value={$form[field.name]} errors={$errors[field.name]} />
		{/each}
	</form>
	<SuperDebug data={$form} />
{:else}
	<p>Unsupported structure and/or formData</p>
{/if}

<style></style>
