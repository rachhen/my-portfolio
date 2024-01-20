/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#4CAF50',
				secondary: '#087F23',
				dark: '#333333',
				light: '#F1F2F4',
				n: {
					0: '#FFFFFF',
					20: '#F1F2F4',
					60: '#C3C7CB',
					80: "#A3ABB2",
					300: '#6D6D6D',
					500: '#555555',
					700: '#171F26',
					900: '#222222',
				}
			},

		},
	},
	plugins: [],
}
