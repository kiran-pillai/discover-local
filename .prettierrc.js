module.exports = {
	tabWidth: 4,
	useTabs: false,
	singleQuote: true,
	endOfLine: 'auto',
	semi: true,
	override: [
		{
			files: '*.scss',
			options: {
				useTabs: false,
				tabWidth: 2,
			},
		},
	],
};
