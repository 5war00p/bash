/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			// ubuntu-colors
			colors: {
				blue: '#5555ff',
				green: '#55ff55',
				'warm-grey': '#AEA79F',
				'cool-grey': '#333333',
				aubergine: {
					light: '#77216F',
					mid: '#5E2750',
					dark: '#2C001E'
				},
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
