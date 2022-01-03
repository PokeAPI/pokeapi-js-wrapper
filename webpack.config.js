const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    target: 'node',
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        libraryTarget: 'umd',
        library: 'Pokedex',
        globalObject: `(typeof self !== 'undefined' ? self : this)`
    },
    node: {
        process: false
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /localforage/,
                loader: 'babel-loader',
                options: {
                    presets: ['es2015']
                }
            }
        ]
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: 'src/pokeapi-js-wrapper-sw.js',
                    to: 'pokeapi-js-wrapper-sw.js',
                    toType: 'file'
                },
                {
                    from: 'src/pokeapi-js-wrapper-sw.js',
                    to: '../test/pokeapi-js-wrapper-sw.js',
                    toType: 'file'
                }
            ]
        })
    ]
};
