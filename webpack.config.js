var path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {path: path.resolve(__dirname, 'build'), filename: 'bundle.js'},
    module: {
        loaders: [
            { test : /\.js$/, loaders : ['babel'] },
            { test: /\.css$/, loaders : ['style', 'css'] },
            { test: /\.svg$/, loaders : ['file-loader'] }
        ]
    }
};
