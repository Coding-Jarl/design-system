<script lang="ts">
	import GlassPane from '$lib/components/GlassPane.svelte';
	import Mondrian from '$lib/components/Mondrian.svelte';
	import Link from '$lib/components/atoms/Link.svelte';
</script>

<div class="wrapper">
	<div class="display">
		<div class="bg">
			<Mondrian />
		</div>
		<div class="fg">
			<GlassPane>
				<Link href="/form">Internal link</Link>
				<Link href="#undefAnchor">Anchor</Link>
				<Link href="https://www.google.com">External link</Link>
				<!-- <Link href="//www.google.com">Test</Link>
				<Link href="ftp://myftp.com">Test</Link>
				<Link href="mailto:valhalla@spamland.com">Test</Link>
				<Link href="tel:+336.06.06.06.06">Test</Link> -->
				<Link href="https://google.com">https://google.com</Link>
				<Link href="//google.com">//google.com</Link>
				<Link href="/form">/form</Link>
				<Link href="#anchor">#anchor</Link>
				<Link href="mailto:aaa@aaa.com">mailto:aaa@aaa.com</Link>
				<Link href="tel:+33612345678">tel:+33612345678</Link>
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
