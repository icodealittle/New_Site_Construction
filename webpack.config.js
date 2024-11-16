const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.ts', // Your entry TypeScript file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true, // Cleans the dist folder before every build
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        // Process the loading page (index.html)
        new HtmlWebpackPlugin({
            template: './src/index.html', // Points to your loading page
            filename: 'index.html', // Output filename in dist
        }),
        // Copy homepage.html without modifications
        new CopyWebpackPlugin({
            patterns: [
                { from: './src/homepage.html', to: './homepage.html' }, // Points to your homepage file
            ],
        }),
    ],
    mode: 'development', // Use 'production' for deployment
};
