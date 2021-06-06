
const path = require('path');
import { CleanWebpackPlugin } from "clean-webpack-plugin";


const config = {

    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "..", 'dist'),
        filename: '[name].[fullhash].js',
        publicPath: "/"
    },
    module:{
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
        ]
    },
    resolve: {
        extensions: [
            '.js',
            '.jsx'
        ]
    },
    plugins: [
        new CleanWebpackPlugin()
    ]

}

module.exports = config;