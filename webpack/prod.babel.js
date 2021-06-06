import config from "./common.babel";
import { resolve } from "path";
import merge  from "webpack-merge"
import HtmlWebpackPlugin from "html-webpack-plugin";
const prod = {
    mode: "production",
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname,"..","./index.html"),
            fileName: "index.[fullhash].html"
        })
    ]
}

module.exports = merge(config, prod);