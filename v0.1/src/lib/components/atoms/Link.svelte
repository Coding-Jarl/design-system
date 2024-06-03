<script lang="ts">
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	type $$Props = Omit<HTMLAnchorAttributes, 'href'> & {
		href: string;
	};

	export let href: $$Props['href'];
	let target = !href.match(/^[\/\#]/) ? '_blank' : '';
</script>

<a {href} {...$$restProps} {target}>
	<slot />
	{#if target}
		(ext)
	{/if}
</a>

<!-- 
    href
    externe ? icon
 -->

<style></style>
