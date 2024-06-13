<script context="module" lang="ts">
	export type Source = { src: string; type: string };
	export type Track = {
		src: string;
		label: string;
		srclang: string;
		kind?: string;
	};
	export type TrackWithCaptions = Track & { kind: 'captions' };
</script>

<script lang="ts">
	export let sources: AtLeastOne<Source>;
	export let tracks: AtLeastOne<Track, TrackWithCaptions>;
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

<!-- <Video {sources} {subtitles}>This is my placeholder</Video> -->

<style>
</style>
