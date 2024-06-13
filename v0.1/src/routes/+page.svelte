<script lang="ts">
	import GlassPane from '$lib/components/GlassPane.svelte';
	import Mondrian from '$lib/components/Mondrian.svelte';
	import Header from '$lib/components/atoms/Header.svelte';
	import Link from '$lib/components/atoms/Link.svelte';
	import List from '$lib/components/atoms/List.svelte';
	import Video from '$lib/components/atoms/Video.svelte';

	const sources = [{ src: '/sample.mp4', type: 'video/mp4' }];
	const tracks = [{ src: '', label: 'Mock Track', srclang: '', kind: 'captions' }];
</script>

<div class="wrapper">
	<div class="display">
		<div class="bg">
			<Mondrian />
		</div>
		<div class="fg">
			<GlassPane>
				<Header>Mes composants</Header>
				<List>
					<li><Link href="/form">Formulaires</Link></li>
					<li><Link href="/link">Liens</Link></li>
				</List>
				<List type="I" data={[1, 2, 3]} />
				<Video {sources} {tracks} />
			</GlassPane>
		</div>
	</div>
</div>

<style>
	.display {
		position: relative;
		display: grid;
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
