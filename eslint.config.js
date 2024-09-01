import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact, { rules } from 'eslint-plugin-react';

export default [
    { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
    { 
        languageOptions: { 
            globals: globals.browser,
            parserOptions: { 
                ecmaVersion: 'latest', 
                sourceType: 'module' 
            },
            // Add the import/resolver configuration here
            settings: {
                'import/resolver': {
                    typescript: {
                        'project': 'tsconfig.json'
                    }
                }
            }
        }
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    {
        rules: {
            '@typescript-eslint/explicit-function-return-type': 'error',
            '@typescript-eslint/no-explicit-any': 'error',
            '@typescript-eslint/explicit-module-boundary-types': 'error',
            '@typescript-eslint/await-thenable': 'error',
            '@typescript-eslint/no-empty-object-type': 'error',
            '@typescript-eslint/no-unnecessary-condition': 'error',
            '@typescript-eslint/no-unnecessary-type-assertion': 'error',
            '@typescript-eslint/no-unsafe-assignment': 'error',
            '@typescript-eslint/no-unsafe-call': 'error',
            '@typescript-eslint/no-unsafe-enum-comparison': 'error',
            '@typescript-eslint/no-unnecessary-boolean-literal-compare': [
                'error',
                {
                    allowComparingNullableBooleansToFalse: true,
                },
            ],
            'no-unused-vars': 'error', 
            'no-unused-imports': 'error', 
        },
    },
];
