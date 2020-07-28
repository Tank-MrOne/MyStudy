## webpack高级配置

### 1. 清空打包目录
* 概述：每次打包前为了避免其他无关文件的干扰，我们最好每次都清空build文件夹
* 所需插件：clean-webpack-plugin，命令:npm i clean-webpack-plugin -D
* 配置：
	1.引入clean-webpack-plugin：
	
	```js
	const { CleanWebpackPlugin } = require('clean-webpack-plugin');
	```
	2.实例化插件
	```js
	new CleanWebpackPlugin()
	```
### 2. HMR
* 概述：在开发环境中我们每次修改文件时，都会造成：整个页面的刷新，全部模块都重新打包、加载，这样效率是很低的，为了确保只是我们修改的模块重新加载，我们要用到HMR技术
* 配置：
	1.devServer配置中追加：```hot:true //开启热模替换```
* 问题：按照上述配置之后，只可以完成样式模块的HMR，且会造成：
	1. 更改html后，页面也不自动刷新了
	2. 不能实现js的HMR，
* 解决：
	1. 修改入口文件配置为：```entry: ['./src/js/index.js','./src/index.html']```
	2. 编写监听完成js的HMR：
	```js
	if (module.hot) {
		  // 若module.hot 为true，说明开启了HMR功能
		  module.hot.accept('./module1.js', () => {
		    //accept方法会监听 module1.js 文件的变化，一旦发生变化，会执行后面的回调函数,其他模块不会重新打包构建。
		    demo();
		  });
	}
	```

### 3. source-map
* 概述：当我们的代码经过了压缩以后，若源代码出了问题，控制台的错误提示很不友好，例如：报错永远是js的第一行有问题，我们需要将压缩过后代码的报错，映射回源文件的具体位置，就要使用source-map技术。
* 配置：
	1. 追加配置：```devtool: 'xxx'```
	2. 上述的xxx是映射模式，可选值可参考：https://www.webpackjs.com/configuration/devtool/
	3. 开发模式推荐值：```cheap-eval-source-map```
	4. 生产模式推荐值：```source-map```

### 4. one of
* 概述：正常来讲，一个文件只能被一个loader处理。 当一个文件要被多个loader处理，那么一定要指定loader执行的先后顺序，例如我们的loader中对js的处理：要先执行eslint 在执行babel

* 配置：
	```javascript
	module:{
			rules:[
				{},//若有些文件不只是被一个loader处理，要把其他loader放在oneOf外侧
				{
					oneOf:[
						{},//loader1
						{},//loader2
						{},//loader3
					]
				}
			]
		}
	```
### 5. 开启babel缓存
* 概述：在生产环境中我们是没有devServer的，所以我们有些时候只是改变了某几个文件，或一个文件后，重新build时，webpack也是会将所有的模块全都重新构建一遍，很浪费时间。
* 配置：在babel-loader配置中追加配置项：```cacheDirectory: true```

### 6. 强缓存下的修复
* 概述：我们都知道，代码经过最终的打包之后是要部署在服务器上的，若服务器开启了，强缓存，就意味着：在强缓存期间，若某个文件要临时更改我们是办不到的。
* 配置方案一：
	* 文件名都混入hash值，每次wepack构建时会生成一个唯一的hash值，我们将这个值混入文件名。
	```javascript
	output: {
	    filename: 'js/built.[hash:10].js',
	    path: resolve(__dirname, 'build')
	  },
	
	new MiniCssExtractPlugin({
      filename: 'css/built.[hash:10].css'
    })
	```
	* 弊端：因为每次打包都有一个唯一的hash值，所以每次打包之后没有修改的文件名字也发生了改变，就导致没有改变的文件也重新请求了服务器，效率不高。
* 配置方案二：
	* 使用contenthash值
	```javascript
	output: {
	    filename: 'js/built.[contenthash:10].js',
	    path: resolve(__dirname, 'build')
	  },
	
	new MiniCssExtractPlugin({
      filename: 'css/built.[contenthash:10].css'
    })
	```
	* 优势：只有当文件的内容改变时，contenthash的值才会改变，内容不变就算多次打包，contenthash值也不变。

### 7. tree-shaking
* 概述：有些时候，我们一个模块向外暴露了n个函数、对象、或其他一些数据，但是我们只是用到了其中的一个或几个，那在最终打包的时候，我们只希望把我们所用的打包进去，这时候就要tree-shaking，即：去除无用代码。
* 配置：满足两个条件webpack会自动开启tree-shaking：
 1. 必须使用ES6模块化  
 2. 开启production环境
* 备注：开启了tree-shaking后，有时候webpack会错误的把我们的样式代码全部干掉，解决办法是：在package.json中追加一个配置：```"sideEffects":["*.css","*.less"]```

### 8. code split
1. 方案一：调整入口文件，写成多入口形式
	1. 存在问题：多个文件都用到第三方库会导致重复打包。
2. 方案二：借助optimization配置将node_modules中的第三方库单独打包
	具体配置：
```javascript
	 /*
	    1. 可以将第三方库单独打包
	    2. 会自动分析各文件中均用到的第三方包。
	  */
	  optimization: {
	    splitChunks: {
	      chunks: 'all'
	    }
	  }
```
3. 特殊情况(方案三)：a.js中要引入b.js暴露出来的内容，就不可避免在a.js中引入b.js，这样就会导致webpack打包时把a.js和b.js打包成一个js文件，但有时我们的需求是b.js要是一个单独的文件。
```javascript
	import(/* webpackChunkName: 'test' */'./module2').then(
		(result)=>{
			// eslint-disable-next-line
			console.log(result)
		}
	).catch(()=>{
		// eslint-disable-next-line
		console.log('error');
	})
```
4. 备注：如果采取方案三可能eslint-loader的语法检查不认识方案三的引入方式，会报错，我们需要安装：babel-eslint，```npm i babel-eslint -D```随后再package.json中的eslintConfig中追加：```"parser": "babel-eslint"```

### 9. lazy loading
* 概述：
	1. 懒加载：当文件需要使用时才加载
    2. 正常加载：可以认为是并行加载（同一时间加载多个文件） 
* 懒加载配置：
```javascript
	btn.onclick = ()=>{
		import(/* webpackChunkName: 'test'*/'./test').then(({ demo }) => {
		    console.log(demo(4, 5));
		  });
	} 
```

### 10. PWA
* 概述，PWA即：渐进式网络开发应用程序(离线可访问)，使网页应用在无网络连接状态不至于白屏。
* 使用到的技术：google推出的workbox，我们在webpack中使用的插件：workbox-webpack-plugin
* 配置：
	1. ```npm i workbox-webpack-plugin -D```
	2. ```const WorkboxWebpackPlugin = require('workbox-webpack-plugin');```
	3. 实例化插件
	```javascript
	new WorkboxWebpackPlugin.GenerateSW({
	      /*
	        1. 帮助serviceworker快速启动
	        2. 删除旧的 serviceworker生成一个 serviceworker 配置文件~
	      */
	      clientsClaim: true,
	      skipWaiting: true
	  })
  ```
	3. 注册serviceWorker
	```javascript
	if ('serviceWorker' in navigator) {
	  window.addEventListener('load', () => {
	    navigator.serviceWorker
	      .register('/service-worker.js')
	      .then(() => {
	        console.log('sw注册成功了~');
	      })
	      .catch(() => {
	        console.log('sw注册失败了~');
	      });
	  });
	}
	```

### 11. 多进程打包
* 概述：多进程打包可以让构建速度更快(不是绝对的)

* 配置：```npm i thread-loader -D```

* 修改babel-loader的配置，追加一个loader

  ```js
  {
      loader: 'thread-loader',
      options: {
        workers: 2 // 进程2个
      }
   }
  ```
### 12. externals

* 概述：忽略指定的第三方库

  ```js
  externals:{
    jquery:'jQuery'
  }
  ```

