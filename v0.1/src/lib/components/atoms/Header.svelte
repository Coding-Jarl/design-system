<script lang="ts">
	import Link from './Link.svelte';
</script>

<h1 class="wrapper">
	<Link href="#">
		<slot />
	</Link>
</h1>

<style>
	.wrapper {
		position: relative;
		font-weight: bold;
	}
	.wrapper:hover::before {
		content: '#';
		position: absolute;
		right: 100%;
	}
</style>
