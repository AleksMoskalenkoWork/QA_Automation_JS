import globals from 'globals';
import pluginJs from '@eslint/js';

/** @type {import('eslint').Linter.Config[]} */
export default [
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended,
	{
		ignores: ['.config/*'],
	},
	{
		rules: {
			'valid-typeof': 'off',
			'no-unused-vars': 'off',
			'no-debugger': 'off',
		},
	},
];
