const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: path.join(__dirname, './src/main.js'),
    mode: "development",
    module: {
        rules: [
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }, //正则表示以css结尾
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                        plugins: ["@babel/plugin-proposal-object-rest-spread", "@babel/plugin-proposal-class-properties", "@babel/plugin-transform-runtime"]
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })//自动会导入js依赖
    ],
    output: {
        filename: "bundle.js",//输出名称
        path: path.join(__dirname, "./dist") //输出路径
    },
}