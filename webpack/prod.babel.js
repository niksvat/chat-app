import config  from "./common.babel";
import merge  from "webpack-merge"
const prod = {
    mode: "production"
}

module.exports = merge(config, prod);