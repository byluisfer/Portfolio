/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
const textShadow = require('tailwindcss-textshadow');

module.exports = {
	content: [
		'./src/**/*.{astro,js,jsx,ts,tsx}',
	],
	theme: {
		extend: {
			colors: {
				'primary': '#1C2B62',
				'secondary': '#9D3BE4',
				'accent': '#505C89',
				'semi-dark': '#17171B',
				'background': '#0E0E11',
				'border-dark': '#252525',
				'semi-white': '#efefef',
				'brown': '#3c3633',
				'purple': '#6e51f0',
				'orange': '#ff5a1f',
			},

			fontFamily: {
				'saira': ['Saira Extra Condensed', 'sans-serif'],
				'lobster': ['Lobster', 'sans-serif'],
				'mplus': ['"M PLUS Rounded 1c"', 'sans-serif'],
				'dafoe': ['Mr Dafoe', 'sans-serif'],
				'archivo': ['Archivo Black', 'sans-serif'],
			},			  

			fontWeight: {
				'black': 900,
				'regular': 400,
			},

			fontSize: {
				'12xl': '15rem',
				'11xl': '11rem',
				'10xl': '10rem',
				'9xl': '9rem',
				'8xl': '8rem',
				'7xl': '7rem',
				'6xl': '6rem',
				'5xl': '5rem',
				'4xl': '4rem',
				'3xl': '3rem',
				'2xl': '2rem',
				'xl': '1.600rem',
			},

			animation: {
				'up-down': 'upDown 3s ease-in-out infinite',
				'wave': 'wave 1s ease-in-out infinite',
			},

			keyframes: {
				upDown: {
					'0%, 100%': { transform: 'translateY(-5px)' },
					'50%': { transform: 'translateY(-20px)' },
				},
				wave: {
					'0%': { transform: 'rotate(0deg)' },
					'20%': { transform: 'rotate(15deg)' },
					'40%': { transform: 'rotate(-10deg)' },
					'60%': { transform: 'rotate(15deg)' },
					'80%': { transform: 'rotate(-10deg)' },
					'100%': { transform: 'rotate(0deg)' },
				  },
			},
			transformOrigin: {
				'custom-origin': '70% 70%',
			},
			textShadow: {
				'led-effect-h2': '0 0 5px #FC4377, 0 0 10px #FC4377, 0 0 15px #FC4377',
				'dark-led-effect-h2': '0 0 5px #9D3BE4, 0 0 10px #9D3BE4, 0 0 15px #9D3BE4',
				'led-effect-h3': '0 0 5px #10ADBB, 0 0 10px #10ADBB, 0 0 15px #10ADBB',
				'dark-led-effect-h3': '0 0 5px #1C2B62, 0 0 10px #1C2B62, 0 0 15px #1C2B62',
			},
		},
	},
	plugins: [textShadow],
}
