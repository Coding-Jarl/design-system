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
				<Field type="button" value="I haz value" />
				<Field type="reset" value="I haz value" />
				<Field type="submit" value="I haz value" />
				<Field type="password" value="I haz value" />
				<Field type="text" value="I haz value" />
			</GlassPane>
		</div>
	</div>
</div>

<style>
	p {
		color: var(--color-primary);
	}
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
