const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// Pages to auto-generate
const htmlPages = [
    'index',
    'technical',
    'techdocument',
    'research',
    'ux',
    'games'
];

const multipleHtmlPlugins = htmlPages.map(name => new HtmlWebpackPlugin({
    template: `./src/${name}.html`,
    filename: `${name}.html`
}));

module.exports = {
    entry: ['./src/index.ts', './src/styles.css', './src/technical.css', './src/theme.css'],

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true, // Clean dist before building
    },

    devtool: 'source-map', // Helps debugging TypeScript in browser

    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
        open: true,
    },

    performance: {
        maxAssetSize: 500000, // Warning if assets are larger than 500 KB
        hints: 'warning',
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
                test: /\.(png|jpe?g|gif|svg|webp)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/image/[name][ext]',
                },
                use: [
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            gifsicle: { optimizationLevel: 3 },
                            mozjpeg: { progressive: true, quality: 75 },
                            optipng: { enabled: true },
                            svgo: { plugins: [{ removeViewBox: false }] },
                        },
                    },
                ],
            },
        ],
    },

    plugins: [
        ...multipleHtmlPlugins, // Auto-generate all your pages
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/assets', to: 'assets' },
            ],
        }),
    ],

    resolve: {
        extensions: ['.ts', '.js'], // So you can import .ts without specifying extension
    },

    mode: 'production',
};
