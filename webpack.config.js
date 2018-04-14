const path = require('path');
const webpack = require('webpack');

const isDev = process.env.NODE_ENV !== 'production';

function resolve(targetPath) {
    return path.join(__dirname, targetPath);
}

module.exports = {
    mode: 'development',
    devtool: isDev ? 'inline-source-map' : false,
    entry: resolve('src/index.js'),
    output: {
        path: resolve('lib'),
        filename: 'redux-timer.js',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    }
};