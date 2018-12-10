const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});

module.exports = {
    // entry: './index.js',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_moduls/,
                use: {
                    loader: 'babel-loader'
                }
            }, {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader!sass-loader",
                })
            }
        ]
    },
    plugins: [htmlPlugin, new ExtractTextPlugin('style.css')],
    optimization: {
        nodeEnv: 'prd'
    }
}