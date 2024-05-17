<script lang="ts">
	import { theme } from './theme';

	const themeToStyle = (theme: Record<string, unknown>, path = ''): string => {
		return Object.entries(theme)
			.flatMap(([key, val]) => {
				if (typeof val === 'string') {
					return `--${path}${key}:${val};`;
				}
				return themeToStyle(val as Record<string, unknown>, `${path}${key}-`);
			})
			.join('');
	};
</script>

<div style={themeToStyle($theme)}>
	<slot />
</div>

<style>
	@layer reset, normalize, atoms, molecules, organisms, templates, pages;

	@layer reset {
		/* html {
			color-scheme: dark light;
		} */
		/* body {
			min-height: 100vh;
		} */
		*,
		*::before,
		*::after {
			box-sizing: border-box;
		}
		img,
		picture,
		svg,
		video {
			display: block;
			max-width: 100%;
		}
		* {
			margin: 0;
			padding: 0;
			font: inherit;
		}
	}

	@layer normalize {
	}
</style>
