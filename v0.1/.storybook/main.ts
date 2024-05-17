import type { StorybookConfig } from '@storybook/sveltekit';

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx|svelte)'],
	addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@chromatic-com/storybook',
        '@storybook/addon-interactions',
        '@storybook/addon-svelte-csf',
        '@storybook/addon-mdx-gfm'
    ],
	framework: {
		name: '@storybook/sveltekit',
		options: {}
	},
	docs: {}
};
export default config;
