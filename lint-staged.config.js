const path = require('path')

const extensionsForPrettify = ['json', 'md', 'stylelintrc', 'prettierrc', 'gitignore', 'eslintrc']

const otherFiles = `**/*.(${extensionsForPrettify.join('|')})`

module.exports = {
	'**/*.(ts|tsx)': () => 'pnpm lint:ts',

	'**/*.(ts|tsx|js)': (filenames) => [
		`pnpm lint:eslint ${filenames.map((f) => path.relative(process.cwd(), f)).join(' ')}`,
		`pnpm lint:prettier ${filenames.map((f) => path.relative(process.cwd(), f)).join(' ')}`,
	],

	'**/*.css': (filenames) => [
		`pnpm lint:stylelint ${filenames.map((f) => path.relative(process.cwd(), f)).join(' ')}`,
		`pnpm lint:prettier ${filenames.map((f) => path.relative(process.cwd(), f)).join(' ')}`,
	],

	[otherFiles]: (filenames) => [
		`pnpm lint:prettier ${filenames.map((f) => path.relative(process.cwd(), f)).join(' ')}`,
	],
}
