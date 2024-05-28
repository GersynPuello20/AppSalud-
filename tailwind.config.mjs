/** @type {import('tailwindcss').Config} */
export default {
		content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
		theme: {
			extend: {
				fontFamily: {
					sans: ['Inter', 'sans-serif'], // Puedes cambiar 'Inter' por cualquier otra fuente que prefieras
				},
				fontSize: {
					base: '1.125rem', // 18px
					lg: '1.25rem', // 20px
					xl: '1.5rem', // 24px
				},
				lineHeight: {
					base: '1.75', // 28px
				},
			},
		},
		plugins: [],
	}
