## webpack基础配置教程
### 1. 初识Webpack
* 什么是webpack
  * Webpack是一个模块打包器(bundler)。
  * 在Webpack看来, 前端的所有资源文件(js/json/css/img/less/...)都会作为模块处理
  * 它将根据模块的依赖关系进行静态分析，生成对应的静态资源
* 五个核心概念
  * Entry：入口起点(entry point)指示 webpack 应该使用哪个模块，来作为构建其内部依赖图的开始。
  * Output：output 属性告诉 webpack 在哪里输出它所创建的 bundles，以及如何命名这些文件，默认值为 ./dist。
  * Loader：loader 让 webpack 能够去处理那些非 JavaScript 文件（webpack 自身只能解析 JavaScript）。
  * Plugins：插件则可以用于执行范围更广的任务。插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量等。
  * Mode：模式，有生产模式production和开发模式development
* 理解Loader
  * Webpack 本身只能加载JS/JSON模块，如果要加载其他类型的文件(模块)，就需要使用对应的loader 进行转换/加载
  * Loader 本身也是运行在 node.js 环境中的 JavaScript 模块
  * 它本身是一个函数，接受源文件作为参数，返回转换的结果
  * loader 一般以 xxx-loader 的方式命名，xxx 代表了这个 loader 要做的转换功能，比如 json-loader。
* 理解Plugins
  * 插件可以完成一些loader不能完成的功能。
  * 插件的使用一般是在 webpack 的配置信息 plugins 选项中指定。
* 配置文件(默认)
  * webpack.config.js : 是一个node模块，返回一个 json 格式的配置信息对象
	
### 2. 开启项目
* 初始化项目：
  * 使用```npm init```或```yarn init```生成一个package.json文件
      ```   
      {
        "name": "webpack_test",
        "version": "1.0.0"
      } 
      ```
* 安装webpack
  * npm install webpack webpack-cli -g  //全局安装,作为指令使用
  * npm install webpack webpack-cli -D //本地安装,作为本地依赖使用
    
### 3. 处理js和json文件
* 创建js文件
  * src/js/app.js
  * src/js/module1.js
  * src/js/module2.js
* 创建json文件
  * src/json/data.json  
* 创建主页面: 
  * src/index.html
* 运行指令
  * 开发配置指令：webpack src/js/app.js -o build/js/app.js --mode=development
    * 功能: webpack能够打包js和json文件，并且能将es6的模块化语法转换成浏览器能识别的语法
  * 生产配置指令：webpack src/js/app.js -o build/js/app.js --mode=production
    * 功能: 在开发配置功能上加上一个压缩代码的功能
  * index.html页面中引入：build/js/app.js
* 结论：
  * webpack能够编译打包js和json文件
  * 能将es6的模块化语法转换成浏览器能识别的语法
  * 能压缩代码
* 缺点：
  * 不能编译打包css、img等文件
  * 不能将js的es6基本语法转化为es5以下语法
* 改善：使用webpack配置文件解决，自定义功能

### 4. webpack配置文件
* 目的：在项目根目录定义配置文件，通过自定义配置文件，还原以上功能
* 文件名称：webpack.config.js
* 文件内容：
```
	const { resolve } = require('path'); //node内置核心模块，用来设置路径。
	
	module.exports = {
		entry: './src/js/app.js', // 入口文件配置（精简写法）
		/*完整写法：
		entry:{
			main:'./src/js/app.js'
		}
		*/
		output: { //输出配置
			filename: './js/app.js',//输出文件名
			path: resolve(__dirname, 'build')//输出文件路径(绝对路径)
		},
		mode: 'development'   //开发环境(二选一)
		//mode: 'production'   //生产环境(二选一)
	};
```
* 运行指令： webpack

### 5. 打包less、css资源
* 概述：less、css文件webpack不能解析，需要借助loader编译解析
* 创建less文件
  * src/css/demo1.less
  * src/css/demo2.css
* 入口app.js文件
  
  * 引入less、css资源  
* 安装loader
  
  * npm install css-loader style-loader less-loader less -D 
* 配置loader
    ```
	{
		// 处理less资源
		test: /\.less$/,
		use: [
			'style-loader', //创建style标签，将js中的样式资源插入进行，添加到head中生效
			'css-loader', //将css文件变成commonjs模块加载js中，里面内容是样式字符串
			'less-loader' //将less文件编译成css文件
		]
	},
	{
		// 处理css资源
		test: /\.css$/,
		use: [ // use数组中loader执行顺序：从右到左，从下到上 依次执行
			'style-loader',// 创建style标签，将js中的样式资源插入进行，添加到head中生效
			'css-loader'// 将css文件变成commonjs模块加载js中，里面内容是样式字符串
		]
	},
	```
* 运行指令：webpack

### 6. 打包html文件
* 概述：借助html-webpack-plugin插件打包html资源
* 创建html文件
  * src/index.html
  * 注意：不要在该html中引入任何css和js文件
* 安装插件：html-webpack-plugin
	
	* npm install html-webpack-plugin -D
* 在webpack.config.js中引入插件（插件都需要手动引入，而loader会自动加载）
	
	* const HtmlWebpackPlugin = require('html-webpack-plugin')
* 配置插件Plugins
    ```
    plugins: [
      new HtmlWebpackPlugin({
		// 以当前文件为模板创建新的HtML(1. 结构和原来一样 2. 会自动引入打包的资源)
        template: './src/index.html', 
      }),
    ]
    ```
* 运行指令：webpack


### 7. 打包样式中的图片
* 概述：图片文件webpack不能解析，需要借助loader编译解析
* 添加2张图片:
   * 小图, 小于8kb: src/images/vue.png
   * 大图, 大于8kb: src/images/react.jpg
* 在less文件中通过背景图的方式引入两个图片
* 安装loader
  * npm install file-loader url-loader file-loader -D
  * 补充：url-loader是对象file-loader的上层封装，使用时需配合file-loader使用。
* 配置loader
	```
	{
		// 处理图片资源
		test: /\.(jpg|png|gif)$/,
		loader: 'url-loader', //url-loader是对file-loader的上层封装
		options: {
			limit: 8 * 1024, //临界值为8KB，小于8KB的图片会被转为base64编码
			name: '[hash:10].[ext]', //加工后图片的名字
			// 关闭es6模块化
			esModule: false, //防止html中<img>变为[object,Object]的问题
			outputPath: 'imgs' //输出路径
		}
	},
	```

### 8. 打包html中的图片
* 概述：html中的```<img>```标签url-loader没法处理，需要引入其他loader处理。
* 添加图片
  
  * 在src/index.html添加一个img标签，src/images/angular.png
* 安装loader
	
	* npm install html-loader --save-dev 
* 配置loader
    ```
    {
		// 处理html中<img>资源
		test: /\.html$/,
		loader: 'html-loader'
	},
    ```
* 坑：打包后html文件中的图片的src变成了：[object Module],
* 解决办法：url-loader中加入一个配置：esModule:false
* 运行指令：webpack

### 9. 打包其他资源
* 概述：其他资源（字体、音视频等）webpack不能解析，需要借助loader编译解析
* 以处理几个字体图标的字体为例，media下添加几个下载好的字体文件：
  * src/media/iconfont.eot
  * src/media/iconfont.svg
  * src/media/iconfont.ttf
  * src/media/iconfont.woff
  * src/media/iconfont.woff2
* 修改incofont.css中字体的url
    ```
    @font-face {
      font-family: 'iconfont';
      src: url('../media/iconfont.eot');
      src: url('../media/iconfont.eot?#iefix') format('embedded-opentype'),
      url('../media/iconfont.woff2') format('woff2'),
      url('../media/iconfont.woff') format('woff'),
      url('../media/iconfont.ttf') format('truetype'),
      url('../media/iconfont.svg#iconfont') format('svg');
    }
    
    .iconfont {
      font-family: "iconfont" !important;
      font-size: 16px;
      font-style: normal;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    ```
* 修改html，添加字体图标，例如：```<span class="iconfont icon-icon-test"></span>```
* 配置loader
	```
	{
		// 处理其他资源(字体、音视频等等)
		exclude: /\.(html|js|css|less|jpg|png|gif)/, //排除的文件
		loader: 'file-loader',
		options: {
			name: '[hash:10].[ext]', //命名
			outputPath: 'media' //输出路径
		}
	}
  ```
* 运行指令：webpack

### 10. devServer
* 安装webpack-dev-server
	
	* npm install webpack-dev-server --save-dev
* 详细配置见官网：指南 -> 开发环境 -> 使用webpack-dev-server 
* 修改webpack配置对象，追加devServer配置（注意不是loader中追加）
    ```
	//devServer配置(开发模式所特有的配置)
	devServer: {
		contentBase: resolve(__dirname, 'build'),//本地打包文件的位置
		compress: true, //启用gzip压缩
		port: 3000, //端口号
		open: true //自动打开浏览器
	}
    ```
* 修改package.json中scripts指令
  
  * ```"dev": "webpack-dev-server"```,
* 运行指令：npm run dev 或者 yarn dev

<hr/>

>至此，你已经完成了用webpack搭建一个简单的开发环境，但这套配置只适用于开发过程中调试代码，项目上线并不能运用这套配置，因为你还有很多的问题没有处理，比如：css还不是单独的文件，css、js还有很多兼容性问题等等，接下来我们开始去搭建生产环境。

### 开发环境准备：
1.新建config文件夹，重命名webpack.config.js为webpack.dev.js，放入config文件夹
2.复制webpack.dev.js，重命名为webpack.prod.js,删除其中的devServer配置，因为这是开发环境特有的，生产环境是不需要的
3.修改package.json中scripts指令：

		"dev": "webpack-dev-server --config ./config/webpack.dev.js",
		"build": "webpack --config ./config/webpack.prod.js"
4.修改output中path为：```path: resolve(__dirname, '../build')```

### 11. 提取css为单独文件
* 安装插件
	
	* npm install mini-css-extract-plugin -D
* 引入插件
  
  * const MiniCssExtractPlugin = require("mini-css-extract-plugin");	
* 配置loader
  ```
//引入mini-css-extract-plugin，用于提取css为单独文件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
{
	// 处理less资源
    test: /\.less$/,
    use: [
      MiniCssExtractPlugin.loader,
      'css-loader',
      'less-loader',
    ]
  },
{
	// 处理css资源
	test: /\.css$/,
	use: [
      MiniCssExtractPlugin.loader,
      'css-loader',
    ]
}
  ```
* 配置插件
  ```
  //提取css为单独文件
	new MiniCssExtractPlugin({
		// 对输出的css文件进行重命名
		filename: 'css/built.css',
	})
  ```
* 运行指令
  
  * npm run build
* 备注：由于在提取了独立的文件，要从外部引入，所以可能会有路径问题，解决方案是在output配置中，添加：```publicPath:'/'``` publicPath根据实际情况自行调整,若上线运行值为```/```,若本地右键运行值为```/build/```

### 12. css兼容性处理
* 安装loader
	* npm install postcss postcss-loader postcss-preset-env -D
* 因为css和less样式文件都要进行兼容性处理，所以我们定义好一个通用的配置：
```
// 配置一个commonCssLoader，处理less和css时都会使用
const commonCssLoader = [
	MiniCssExtractPlugin.loader, //提取css为单独的文件
		'css-loader', //将css文件变成commonjs模块加载js中，里面内容是样式字符串
		{
		//注意：想让postcss-loader工作，还需在package.json中定义browserslist配置兼容程度
		loader: 'postcss-loader',
		options: {
		  ident: 'postcss',
		  plugins: () => [require('postcss-preset-env')()]
		}
	}
];
```
* 修改css-loader和less-loader配置
```
	{
		// 处理css资源
		test: /\.css$/,
		use: [...commonCssLoader]
	},
	{
		// 处理less资源
		test: /\.less$/,
		use: [...commonCssLoader, 'less-loader']
	},
```

* 配置package.json，在其中追加browserslist配置，通过配置加载指定的css兼容性样式
	```
	"browserslist": {
		// 开发环境
		"development": [
			"last 1 chrome version",
			"last 1 firefox version",
			"last 1 safari version"
		],
		// 生产环境：默认是生产环境
		"production": [
			">0.2%", //兼容市面上99.8%的浏览器
			"not dead", //"死去"的浏览器不做兼容，例如IE8
			"not op_mini all",//不做欧朋浏览器mini版的兼容
			"ie 10" //兼容IE10
		]
	}
	```
* 备注1: 注意上方browserslist中的development和production，并不是看webpack配置文件中mode的取值，而是看node中的一个环境变量：process.env.NODE_ENV，这个值默认是production，若想修改则使用：process.env.NODE_ENV = development
* 备注2: browserslist 是一套描述产品目标运行环境的工具，它被广泛用在各种涉及浏览器/移动端的兼容性支持工具中，详细配置规则参考：https://github.com/browserslist/browserslist

* 运行指令：
  
  * npm run build

### 13. js语法检查
* 概述：对js基本语法错误/隐患，进行提前检查
* 安装loader
  
  * npm install eslint-loader eslint
* 安装检查规则库：
  
  * npm install eslint-config-airbnb-base  eslint-plugin-import
* 备注:eslint-config-airbnb-base定制了一套标准的、常用的js语法检查规则，推荐使用
* 配置loader
    ```
    module: {
      rules: [
        {
	        // 对js进行语法检查
	        test: /\.js$/,
	        exclude: /node_modules/,
	        // 优先执行
	        enforce: 'pre',
	        loader: 'eslint-loader',
	        options: {
	          fix: true //若有问题自动修复，重要！！！！
        	}
		}      
      ]
    }
    ```
* 修改package.json
    ```
	"eslintConfig": {
	  "extends": "airbnb-base", //直接使用airbnb-base提供的规则
	  "env": {
	   "browser": true
	  }
	 }
    ```
* 运行指令：webpack
* 备注：若出现：warning  Unexpected console statement  no-console警告，意思是不应该在项目中写console.log(),若想忽略，就在要忽略检查代码的上方输入一行注释：// eslint-disable-next-line即可。

### 14. js语法转换
* 概述：将浏览器不能识别的新语法转换成原来识别的旧语法，做浏览器兼容性处理
* 安装loader
  
  * npm install babel-loader @babel/core @babel/preset-env --save-dev
* 配置loader
    ```
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
    }
    ```
* 运行指令：webpack

### 15. js兼容性处理
#### 第1种方法：使用经典的polyfill

* 安装包
  
  * npm install @babel/polyfill
* 使用
	```
	- app.js
	
		import '@babel/polyfill'; // 包含ES6的高级语法的转换
	```
* 优点：解决babel只能转换部分低级语法的问题(如：let/const/解构赋值...)，引入polyfill可以转换高级语法(如:Promise...)
* 缺点：将所有高级语法都进行了转换，但实际上可能只使用一部分
* 解决：需要按需加载（使用了什么高级语法，就转换什么，而其他的不转换）

#### 第2种方法：借助core-js按需引入

* 安装包
  
  * npm install core-js
* 配置loader
	```
	{
		test: /\.js$/,
		exclude: /(node_modules)/,
		use: {
		  loader: 'babel-loader',
		  options: {
		    presets: [
		      [
		        '@babel/preset-env',
		        {
		          useBuiltIns: 'usage',  // 按需引入(需要使用polyfill)
		          corejs: { version: 3 }, // 解决warning警告
		          targets: { // 指定兼容性处理哪些浏览器
		            "chrome": "58",
		            "ie": "9",
		          }
		        }
		      ]
		    ],
		    cacheDirectory: true, // 开启babel缓存
		  }
		}
	},
	```
  
### 16. 压缩html、压缩js
* 直接修改webpack.prod.js中的model为production即可。
* 坑：若设置了模式为production，必须在new HtmlWebpackPlugin时添加配置minify: false：
```
	new HtmlWebpackPlugin({
  	// 以当前文件为模板创建新的HtML(1. 结构和原来一样 2. 会自动引入打包的资源)
		template: './src/index.html', 
		minify: false
	}),
```

> 以上就是webpack生产环境的配置，可以生成打包后的文件。



