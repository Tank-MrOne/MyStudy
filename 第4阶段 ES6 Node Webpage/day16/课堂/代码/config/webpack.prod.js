//引入 path 模块
const path = require("path");
//引入 html 插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
//引入 移除打包文件夹的插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); 
//引入 提取css代码插件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//引入 CSS 压缩的插件
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
//commonJS 模块化暴露语法
module.exports = {
    //入口位置
    entry: ["./src/js/app.js","./src/abc.html"],
    //配置出口位置
    output: {
        //配置出口的基本目录    resolve 方法可以拼接路径 组成一个绝对路径 路径分割符号不会存在差异
        // resolve 的后续路径开头不要加 /
        path: path.resolve(__dirname, "../build"),
        //配置出口的文件相对路径
        filename: "js/app.js",
        //配置输出资源对应的路径
        publicPath: '/'
    },
    //配置模式
    mode: "production",
    //配置 loader
    module: {
        //配置所有的 loader
        rules: [
            //配置 less 文件的处理
            {
                test: /\.less$/,  		// 检查文件是否以.less结尾（检查是否是less文件）
                use: [					// 数组中loader执行是从下到上，从右到左顺序执行
                    MiniCssExtractPlugin.loader,	// 创建style标签，添加上js中的css代码
                    'css-loader', 		// 将css以commonjs方式整合到js文件中
                    {
                        loader: 'postcss-loader',      		// 1. 设置 postcss-loader
                        options: {
                            plugins: [
                                require("autoprefixer") 	// 2. 配置插件
                            ]
                        }
                    },
                    'less-loader' 		// 将less文件解析成css文件
                ]
            },
            //配置 eslint 语法检查
            {
                test: /\.js$/,                  //只检测js文件
                exclude: /node_modules/,        //排除node_modules文件夹
                enforce: "pre",                 //提前加载使用
                use: {
                    loader: "eslint-loader"		//使用eslint-loader解析
                }
            },
            //配置 babel 进行语法转化  es2015
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            //配置图片的引入
            {
                test: /\.(png|jpg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 8192,               		// 8kb以下的图片会base64处理 8192Bype ==  8KB
                        outputPath: 'images',           // 文件本地输出路径
                        //调整图片显示的路径的, 如果后期图片不显示, 一定要想到这个位置
                        name: '[hash:8].[ext]',         // 修改文件名称和后缀 
                    }
                }
            },
            //配置HTML文件中的图片处理
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader'
                }
            },
            //针对字体文件配置 loader
            {
                test: /\.(eot|svg|woff|woff2|ttf|mp3|mp4|avi)$/,  // 处理字体文件
                loader: 'file-loader',
                options: {
                  outputPath: 'fonts',
                  name: '[hash:8].[ext]'
                }
            }
        ]
    },
    //配置插件
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/abc.html', // 设置要编译的 HTML 源文件路径
        }),
        //2. 配置插件 移除打包文件夹
        new CleanWebpackPlugin() ,
        //配置 css 抽离
        new MiniCssExtractPlugin({					// 3. 配置插件
            filename: "css/[hash:8].css",
        }),
        //设置CSS的压缩
        new OptimizeCssAssetsPlugin({
            cssProcessorPluginOptions: {
        		//移除所有的注释
                preset: ['default', {discardComments: {removeAll: true}}],
            },
            // 解决没有source map问题
            cssProcessorOptions: {                  
                map: true
            }
        })
    ],
    //配置 devtool  cheap 单词有便宜
    devtool: "source-map",

};