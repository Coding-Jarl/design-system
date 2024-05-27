<script lang="ts">
	import GlassPane from '../components/GlassPane.svelte';
	import Mondrian from '../components/Mondrian.svelte';
	import Field from '../components/molecules/Field.svelte';
</script>

<div class="wrapper">
	<div class="display">
		<div class="bg">
			<Mondrian />
		</div>
		<div class="fg">
			<GlassPane>
				<Field label="Button" name="xyz" type="button" value="I haz value" />
				<Field label="Reset" name="xyz" type="reset" value="I haz value" />
				<Field label="Submit" name="xyz" type="submit" value="I haz value" />
				<Field label="Password" name="xyz" type="password" value="I haz value" />
				<Field label="Text" name="xyz" type="text" value="I haz value" />
				<Field label="TextArea" name="xyz" type="textarea" value="I haz value" />
				<Field label="Number" name="xyz" type="number" value="I haz value" />
				<Field label="Checkbox" name="xyz" type="checkbox" value="I haz value" />
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
