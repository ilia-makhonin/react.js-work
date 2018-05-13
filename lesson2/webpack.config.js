let path = require('path');

module.exports = {
    context: __dirname,
    entry: './src/vendor.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'vendor.js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    }
};