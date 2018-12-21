const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				loader: 'babel-loader',
				exclude: '/node_modules/'
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract(
				{
					fallback: 'style-loader',
					use: ['css-loader']
				})
			}
		]
	},
	plugins: [
		new ExtractTextPlugin({filename: 'style.css'})
	]
};