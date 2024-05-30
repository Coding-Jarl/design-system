<script lang="ts">
	import { superForm } from 'sveltekit-superforms';
	import GlassPane from '../components/GlassPane.svelte';
	import Mondrian from '../components/Mondrian.svelte';
	import Field from '../components/molecules/Form/Field.svelte';

	export let data;

	const { form, enhance, errors } = superForm(data.form);
</script>

<div class="wrapper">
	<div class="display">
		<div class="bg">
			<Mondrian />
		</div>
		<div class="fg">
			<GlassPane>
				<!-- <Field label="Button" name="xyz" type="button" value="I haz value" />
				<Field label="Reset" name="xyz" type="reset" value="I haz value" />
				<Field label="Submit" name="xyz" type="submit" value="I haz value" />
				<Field label="Password" name="xyz" type="password" value="I haz value" />
				<Field label="Text" name="xyz" type="text" value="I haz value" />
				<Field label="TextArea" name="xyz" type="textarea" value="I haz value" />
				<Field label="Number" name="xyz" type="number" value="I haz value" />
				<Field label="Checkbox" name="xyz" type="checkbox" value="I haz value" /> -->

				<form method="POST" use:enhance>
					<Field type="text" name="name" label="Text" bind:value={$form.name} />
					{#if $errors.name}<span class="invalid">{$errors.name}</span>{/if}

					<Field
						type="text"
						name="email"
						label="Email"
						bind:value={$form.email}
						errors={$errors.email}
					/>

					<Field type="submit" name="submit" label="Envoyer" value="Envoyer" />
				</form>
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
