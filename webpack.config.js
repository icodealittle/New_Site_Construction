const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true, // Automatically clean the dist folder
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
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/[name][ext]',
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/homepage.html',
            filename: 'homepage.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/technical.html',
            filename: 'technical.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/techdocument.html',
            filename: 'techdocument.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/ux.html',
            filename: 'ux.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/research.html',
            filename: 'research.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'styles.css', // Output CSS file
        }),
    ],
    mode: 'development',
};
