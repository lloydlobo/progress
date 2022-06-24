// const adapter = require('@sveltejs/adapter-auto');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [require('daisyui')]
};

module.exports = config;
