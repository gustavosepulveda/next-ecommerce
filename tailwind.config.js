/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			gridTemplateColumns: {
				// This will put all the products in a grid, autofit into 15rem, if smaller than 1fr= fit in all avalable space.
				fluid: "repeat(auto-fit, minmax(15rem,1fr))",
			},
		},
	},
	plugins: [],
}
