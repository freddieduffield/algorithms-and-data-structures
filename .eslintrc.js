module.exports = {
    env: {
        node: true,
    },
    extends: [
        'eslint:recommended',
        'prettier',
    ],
    plugins: [
        'import'
    ],
    rules: {
        'import/order': ['error', {
            alphabetize: {
                order: 'asc'
            },
            'newlines-between': 'always'
        }]
    },
    'overrides': [{
        files: ['*.ts'],
        extends: [
            'eslint:recommended',
            'plugin:@typescript-eslint/recommended',
            'prettier',
        ],
        rules: {
            '@typescript-eslint/no-explicit-any': 0
        },
        parser: '@typescript-eslint/parser',
        plugins: [
            '@typescript-eslint'
        ],
    }],
}