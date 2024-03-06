import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/**/*.{js,jsx,mdx,ts,tsx}',
	],

	daisyui: {
		themes: ['light', 'dark', {
			dsmith: {
				primary: '#003262',
				'primary-content': '#DDD5C7',
				secondary: '#FDB515',
				'secondary-content': '003262',
				accent: '#3B7EA1',
				'accent-content': '#DDD5C7',
			}
		}]
	},

	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
			}
		}
	},

	plugins: [
		require('daisyui')
	]
};

export default config;
