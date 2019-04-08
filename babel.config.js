module.exports = function(api) {
    api.cache(true);

    return {
        presets: [
            '@babel/preset-env',
            '@babel/preset-react'
        ],

        plugins: [
            ['@babel/plugin-proposal-optional-chaining'],
            ['@babel/plugin-proposal-nullish-coalescing-operator'],
            ['@babel/plugin-syntax-dynamic-import']
        ]
    }
};