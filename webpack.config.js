const path = require('path');

module.exports = {
    entry: './src/App.jsx',

    output: {
      filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },

    devServer: {
        contentBase: './public'
    },

    devtool: 'source-map',

    resolve: {
        extensions: ['.js', '.jsx']
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
};