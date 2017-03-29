var webpack = require('webpack')
var path = require('path')

module.exports = {
	devtool: 'source-map',
	entry: './src/index.js',
	output : {
		path: path.join(__dirname, 'dist'),
		filename: 'index.js'
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
				use: ["style-loader","css-loader"]
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env' :{
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			comments: false,
			compress: {
				warnings: false
			}
		}),
		new webpack.LoaderOptionsPlugin({
			minimize: true
		})
	]
}