/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				blue: '#000080',
				green: '#55FF55',
				aubergine: {
					light: '#77216F',
					mid: '#5E2750',
					dark: '#2C001E'
				}
			},
			backgroundColor: {
				aubergine: {
					light: '#77216F',
					mid: '#5E2750',
					dark: '#2C001E'
				}
			}
		}
	},
	plugins: [require('@tailwindcss/forms')]
}
