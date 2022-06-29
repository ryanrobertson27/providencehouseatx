/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"index.html",
		"pastshows.html",
		"upcoming.html",
		"contact.html",
		"js/script.js",
	],
	theme: {
		extend: {
			backgroundImage: {
				"hero-image": "url('/images/hero-image.jpg')",
				"static-image": "url('/images/static-background.jpeg')",
			},
		},
		plugins: [require("@tailwindcss/forms")],
	},
};
