const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const nodeExternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')


const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, "examples/index.html"),
    filename: "./index.html"
});



module.exports = {
    entry: path.join(__dirname, "src/greet.jsx"),
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'GreetMe',
        libraryTarget: 'commonjs'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [new CleanWebpackPlugin()],
    externals: [nodeExternals()],

    // plugins: [htmlWebpackPlugin],
    resolve: {
        extensions: [".js", ".jsx"]
    },
    // devServer: {
    //     port: 3001
    // }
};