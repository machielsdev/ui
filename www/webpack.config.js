// eslint-disable-next-line @typescript-eslint/no-var-requires
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackManifestPlugin = require('webpack-manifest-plugin');
const dotenv = require('dotenv');

/**
 * Load env file and parse config, to be used when building the app
 * @returns {webpack.DefinePlugin}
 */
const setEnvVars = () => {
    const env = dotenv.config({
        path: './www/.env'
    }).parsed;

    // loop over the keys and place them in the process.env namespace
    const keys = Object.keys(env).reduce((prev, next) => {
        prev[`process.env.${next}`] = JSON.stringify(env[next]);
        return prev;
    }, {});

    return new webpack.DefinePlugin(keys);
};

module.exports = {
    entry: {
        main: './www/src/index.tsx'
    },
    module: {
        rules: [
            {
                test: /\.ts(x|)?$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }, {
                test: /\.[s|]css$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }, {
                    loader: 'sass-loader',
                    options: {
                        implementation: require('dart-sass')
                    }
                }]
            }, {
                test: /\.(png|svg|jpg|jpeg|gif|ico|woff2?|eot|ttf)$/,
                exclude: /node_modules/,
                use: ['file-loader?name=[name].[ext]'] // ?name=[name].[ext] is only necessary to preserve the original file name
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './www/public/index.html',
            favicon: path.resolve(__dirname, 'public', 'favicon.ico')
        }),
        new WebpackManifestPlugin(),
        setEnvVars()
    ],
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'www', 'public'),
        publicPath: '/'
    },
    mode: 'development',
    devServer: {
        host: 'localhost',
        port: 3000,
        open: true,
        historyApiFallback: true,
        publicPath: '/',
        hot: true
    }
};
