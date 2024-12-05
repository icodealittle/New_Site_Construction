const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.ts', // Entry point for the app
    output: {
        filename: 'bundle.js', // Output bundled JavaScript file
        path: path.resolve(__dirname, 'dist'), // Output directory
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'), // Serve content from dist directory
        },
        compress: true, // Enable compression
        port: 9000, // Development server port
        open: true, // Automatically open the browser
    },
    module: {
        rules: [
            {
                test: /\.ts$/, // Process TypeScript files
                use: 'ts-loader', // Use ts-loader to transpile TypeScript
                exclude: /node_modules/,
            },
            {
                test: /\.css$/, // Process CSS files
                use: [MiniCssExtractPlugin.loader, 'css-loader'], // Extract CSS into separate file
            },
            {
                test: /\.(png|jpe?g|gif|svg|webp)$/i, // Process image assets (JPG, PNG, GIF, SVG, etc.)
                type: 'asset/resource', // Use Webpack's asset module
                generator: {
                    filename: 'assets/image/[name][ext]', // Copy images to dist/assets/image/
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html', // Create index.html from template
        }),
        new HtmlWebpackPlugin({
            template: './src/homepage.html',
            filename: 'homepage.html', // Create homepage.html from template
        }),
        new HtmlWebpackPlugin({
            template: './src/technical.html',
            filename: 'technical.html', // Create technical.html from template
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css', // Generate separate CSS file
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/assets', to: 'assets' }, // Copy all assets to dist/assets
            ],
        }),
        new HtmlWebpackPlugin({
            template: './src/techdocument.html',
            filename: 'techdocument.html', // Create homepage.html from template
        }),
        new HtmlWebpackPlugin({
            template: './src/research.html',
            filename: 'research.html', // Create homepage.html from template
        }),
        new HtmlWebpackPlugin({
            template: './src/ux.html',
            filename: 'ux.html', // Create homepage.html from template
        }),
    ],
    mode: 'development', // Set Webpack mode to development for debugging
};
