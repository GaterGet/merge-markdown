export default [
	{
		files: ["**/*.ts", "**/*.tsx"],
		plugins: {
			"@typescript-eslint": require("@typescript-eslint/eslint-plugin"),
		},
		extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
		rules: {
			"no-unused-vars": "off",
			"@typescript-eslint/no-unused-vars": "warn",
		},
	},
];