module.exports = {
    entry: './src/app.js',
    output: {path: __dirname, filename: 'bundle.js'},
    module: {
        loaders: [
            { test : /\.js$/, loaders : ['babel'] },
            { test: /\.css$/, loaders : ['style', 'css'] },
            { test: /\.svg$/, loaders : ['file-loader'] }
        ]
    }
};
