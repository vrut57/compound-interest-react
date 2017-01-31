
var webpack = require('webpack');

var HTMLWebpackPlugin = require('html-webpack-plugin');

var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
	template: __dirname + '/app/index.html',
	filename: 'index.html',
	inject: 'body'
});



module.exports = {
	entry: __dirname + '/app/index.js',
	module: {
		loaders:[
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	},
	resolve:{
		modulesDirectories: ['app', 'node_modules'],
		extensions: ['', '.js', '.jsx']
	},
	output: {
		filename: 'transformed.js',
		path: __dirname + '/build'
	},
	plugins: [
		HTMLWebpackPluginConfig,
		new webpack.ProvidePlugin({
			d3: 'd3'
		})
	 ]
};