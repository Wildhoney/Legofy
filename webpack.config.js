require('babel-loader');

module.exports = {
    entry: {
        legofy: ['./src/core.js']
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].js',
        library: 'legofy',
        libraryTarget: 'commonjs2'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'stage-0']
                }
            }
        ]
    }
};
