var webpack = require('webpack')
var path = require('path')

module.exports = {
    entry: {
        table: path.join(__dirname, "src", "Table.js"),
        column: path.join(__dirname, "src", "Column.js")
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].bundle.js"
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.join(__dirname, "src"),
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                include: path.join(__dirname, "src"),
                loader: 'css-loader'
            }
        ]
    }
}