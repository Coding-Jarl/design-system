<script lang="ts">
	import { theme } from './theme';

	const themeToStyle = (theme: Record<string, unknown>, path = ''): string => {
		return Object.entries(theme)
			.flatMap(([key, val]) => {
				if (typeof val === 'string' || typeof val === 'number') {
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
</style>
