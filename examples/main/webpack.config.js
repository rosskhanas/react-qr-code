var path = require('path');

module.exports = {
	entry: './index.js',
	output: {
		path: __dirname,
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx'],
		alias: {
			'react-qr-code': path.join(__dirname, '..', '..', 'src')
		}
	},
	module: {
		loaders: [
			{ test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ }
		]
	}
};
