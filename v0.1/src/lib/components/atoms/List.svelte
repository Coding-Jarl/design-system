<script lang="ts">
	export let type: 'a' | 'i' | '1' | 'A' | 'I' | undefined = undefined;
	export let data: Array<unknown> = [];
</script>

{#if type}
	<ol {type}>
		<slot>
			{#each data as item}
				<li>{item}</li>
			{/each}
		</slot>
	</ol>
{:else}
	<ul>
		<slot>
			{#each data as item}
				<li>{item}</li>
			{/each}
		</slot>
	</ul>
{/if}

<style>
	ul {
		list-style-type: none;
	}
</style>
