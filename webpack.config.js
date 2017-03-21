var webpack = require('webpack')
var path = require('path')

module.exports = {
    entry: path.join(__dirname, "index.js"),
    output: {
        path: path.join(__dirname),
        filename: "index.bundle.js"
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.join(__dirname, 'src'),
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                include: path.join(__dirname, 'src'),
                loader: 'css-loader'
            }
        ]
    }
}