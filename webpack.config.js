const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    target: 'node',
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        libraryTarget: 'umd',
        library: 'Pokedex'
    },
    node: {
        process: false
    },
    module: {
        rules: [
        {
            test: /\.js$/,
            exclude: /localforage/,
            loader: 'babel-loader',
            options: {
                presets: ['es2015']
            }
        },
        {
            test: /\.json$/,
            loader: "json-loader"
        }
        ]
    },
    plugins: [
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
    ]
};