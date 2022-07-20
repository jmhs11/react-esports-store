module.exports = {
	content: ['index.html', './src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		container: {
			center: true
		},
		extend: {
			gridTemplateColumns: {
				menu: '5rem 1fr'
			}
		}
	},
	plugins: []
};
