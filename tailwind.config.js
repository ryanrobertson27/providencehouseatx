/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"index.html",
		"script.js",
		"pages/**/*.html",
		"node_modules/zoomwall.js/**/*.{js, css}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"hero-image": "url('/images/hero-image.jpg')",
			},
		},
	},
	plugins: [],
};
