<script lang="ts">
	import type { HTMLAnchorAttributes } from 'svelte/elements';
	import { page } from '$app/stores';

	type $$Props = Omit<HTMLAnchorAttributes, 'href'> & {
		href: string;
	};

	export let href: $$Props['href'];
	
	const external = isExternal(href);
	const externalProps = {
		target: '_blank',
		rel: 'noopener noreferrer',
	}

	function checkDomain(url: string): string {
		if (url.indexOf('//') === 0) {
			url = $page.url.protocol + url;
		}
		return url
			.toLowerCase()
			.replace(/([a-z])?:\/\//, '$1')
			.split('/')[0];
	}

	function isExternal(url: string): boolean {
		return (
			(url.indexOf(':') > -1 || url.indexOf('//') > -1) &&
			checkDomain($page.url.href) !== checkDomain(url)
		);
	}
</script>

<a {href} {...external ? externalProps : {}} {...$$restProps}>
	<slot />

	{#if external}
		(ext)
	{/if}
</a>