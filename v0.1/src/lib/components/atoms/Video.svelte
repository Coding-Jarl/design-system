<script lang="ts">
	type Source = { src: string; type: string };
	export let sources: [Source, ...Source[]]; // Forces an array to have at least 1 elt

	type Track = {
		src: string;
		label: string;
		srclang: string;
		kind?: string;
	};
	export let tracks: [Track & { kind: 'captions' }, ...Track[]];
</script>

<!-- svelte-ignore a11y-media-has-caption -->
<!-- (Rule ignored because it's enforced in TS above) -->
<video controls>
	{#each sources as source}
		<source src={source.src} type={source.type} />
	{/each}
	{#each tracks as track}
		<track label={track.label} src={track.src} srclang={track.srclang} kind={track.kind} />
	{/each}

	<slot />
</video>

<style>
</style>
