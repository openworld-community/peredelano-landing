module.exports = {
	plugins: {
		'postcss-import': {},
		'postcss-nested': {},
		'@csstools/postcss-global-data': {
			files: ['./src/styles/media.css'],
		},
		'postcss-custom-media': {},
		'@csstools/custom-units': {},
		'autoprefixer': {},
	},
}
