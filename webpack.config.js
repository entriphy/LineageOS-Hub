const webpack = require('webpack');
const path = require('path');

module.exports = {
    mode: "development",
    devtool: 'eval',
    entry: {
        app: ['webpack-hot-middleware/client', './app/app.js']
    },
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
        publicPath: '/dist'
    },
    devServer: {
        contentBase: './app',
        publicPath: '/dist',
        port: 8080
    },
    module: {
        rules:
            [
                {
                    test: /\.js?$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                    query: {
                        presets: ['env', 'stage-1', 'react']
                    }
                }
            ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ]
};