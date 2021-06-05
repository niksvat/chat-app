import config from "./common.babel";
import { resolve } from "path";
import merge from "webpack-merge";
import HtmlWebPackPlugin from "html-webpack-plugin";
import { HotModuleReplacementPlugin } from "webpack";

const dev = {
    mode: "development",
    devtool: "inline-source-map", // to map back from bundle.js to original file to track down error
    plugins: [
        new HtmlWebPackPlugin({
            template: resolve(__dirname, "..", "index.html")
        }),
        new HotModuleReplacementPlugin()
    ],
    devServer:{
        contentBase: resolve(__dirname,"..","./dist"),
        port: 9090,
        host: "developer.chatapp.com",
        writeToDisk: true,
        watchContentBase: true
    }

}

module.exports = merge(config, dev);