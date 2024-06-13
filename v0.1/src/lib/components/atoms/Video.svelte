<script lang="ts">
	export let sources: Array<{ src: string; type: string }> = [];
	export let subtitles: Array<{ src: string; label: string; srclang: string; kind?: string }> = [];
</script>

<video>
	{#each sources as source}
		<source src={source.src} type={source.type} />
	{/each}
	{#each subtitles as subtitle}
		<track
			label={subtitle.label}
			src={subtitle.src}
			srclang={subtitle.srclang}
			kind={subtitle.kind || 'subtitles'}
		/>
	{/each}

	<slot />
</video>

<Video {sources} {subtitles}>This is my placeholder</Video>

<style>
</style>
