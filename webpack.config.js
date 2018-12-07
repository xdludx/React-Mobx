const HtmlWebPackPlugin = require("html-webpack-plugin");

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
                test: /\.css$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }]
            }
        ]
    },
    plugins: [htmlPlugin],
    optimization: {
        nodeEnv: 'prd'
    }
}