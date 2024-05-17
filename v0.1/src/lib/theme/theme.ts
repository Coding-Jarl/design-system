import { writable } from 'svelte/store';

const goldenRatio = 1.618;

export const theme = writable({
	color: {
		primary: '#321556',
		secondary: '#57008a',
		accent: '#c22d00',
		foreground: 'beige',
		background: '#1d1e22'
	},
	font: {
		header: 'Permanent Marker',
		baseText: 'Roboto'
	},
	size: {
		base: '1rem',
		scale: goldenRatio
	},
	fx: {
		glass: {
			color: 'white',
			opacity: '10%'
		}
	}
});
export type Theme = typeof theme;
