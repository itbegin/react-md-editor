
module.exports = {
    parser: 'babel-eslint',
    extends: 'airbnb',
    parserOptions: {
        ecmaVersion: 7,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
            experimentalObjectRestSpread: true,
        },
    },
    env: {
        browser: true,
        node: true,
        mocha: true,
    },
    rules: {
        semi: 0,
       'no-underscore-dangle': 0,
       'func-name': 0,
       'no-unused-vars': [1, { "vars": "all", "args": "none" }],
       "react/prop-types": [2, { ignore: ["children", "store"] }],
       "react/require-extension": [2, { "extensions": [".js", ".jsx"] }],
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.json']
            },
        },
    },
};
