## 技术列表
	1) Context
	2) Fragment
	3) 组件优化
	4) refs转发
	5) render props
	6) 路由组件懒加载
	7) Hooks


## 1. Context

### 文档: 
	https://zh-hans.reactjs.org/docs/context.html

### 理解
	组件间通信方式, 常用用于祖孙组件间相互通信

### 使用:
	1) 创建Context容器对象
		const xxxContext = React.createContext(defaultValue)  
		// defaultValue只有没指定Provider时才有效果, 可以不用指定
	2) 在最外层包上Provider, 并指定要传递给后代组件的数据(任意类型)
		<xxxContext.Provider value={数据}>子组件</xxxContext.Provider>
	3) 任意后代组件, 读取数据
		方式一: 只能用在类组件 
		  static contextType = xxxContext  // 声明接收context
		  this.context // 读取context中的value数据
		方式二: 可以用在函数组件和类型组件
		  <xxxContext.Consumer>
		    {
		      value => ( // value就是context中的value数据
		        要显示的界面
		      )
		    }
		  </xxxContext.Consumer>

### 应用:
	react-redux就是利用context来向后代容器组件提供store的
	react-router利用context向路由提供路由相关对象

### 注意: 
	在应用开发中一般不用context, 一般都它的封装react插件


## 2. Fragment

### 文档: 
	https://zh-hans.reactjs.org/docs/fragments.html

### 使用
	<Fragment><Fragment>
	<></>

### 作用
	1) 可以不用必须有一个真实的DOM根标签了
	2) 可以对多个标签进行统一的控制(比如: 显示/隐藏)
	功能类似于vue中的<template>


## 3. 组件优化

### Component的2个问题 
	1) 只要执行setState(),即使不改变状态数据, 组件也会重新render()
	2) 只当前组件重新render(), 就会自动重新render子组件 
	==> 效率低

### 效率高的做法:
	只有当组件的state或props数据发生改变时才重新render()

### 原因:
	Component中的shouldComponentUpdate()总是返回true

### 解决:
	办法1: 
		重写shouldComponentUpdate()方法
		比较新旧state或props数据, 如果有变化才返回true, 如果没有返回false
	办法2:  
		使用PureComponent
		PureComponent重写了shouldComponentUpdate(), 只有state或props数据有变化才返回true
		注意: 
			只是进行state和props数据的浅比较, 如果只是数据对象内部数据变了, 返回false  
			不要直接修改state数据, 而是要产生新数据
	项目中一般使用PureComponent来优化


## 4. refs转发

### 文档: 
	https://zh-hans.reactjs.org/docs/forwarding-refs.html

### 前置理解
	refs的作用:
	  1) 标识组件内的HTML标签 ==> 得到真实DOM对象 ==> 直接操作真实DOM (尽量少使用)
	  2) 标识组件内的子组件标签 ==> 得到组件对象 ==> 与子组件进行相互通信
	问题:
	  ref无法标识一个函数组件标签(因为没有组件实例对象)
	疑问: 
	  如果想操作函数组件内的HTML标签, 怎么办?

### refs转发
	语法: React.forwardRef(FunctionComp)
	作用: 在函数组件外部通过ref得到函数组件内部的标签, 从而操作其内部标签
	应用: Link/NavLink就使用了此技术来封装, 来在组件外部获取操作内部包含的a标签


## 5. render props

### 文档: 
	https://zh-hans.reactjs.org/docs/render-props.html

### 如何向组件内部动态传入带内容的结构(标签)?
	Vue中: 
		使用slot技术, 也就是通过组件标签体传入结构
	React中:
		使用children props: 通过组件标签体传入结构
		使用render props: 通过组件标签属性传入结构, 一般用render函数属性

### children props:
	<A>
		<B></B>
	</A>
	{this.props.children}
	问题: 如果B组件需要A组件内的数据, ==> 做不到 

### render props
	<A render={(data) => <C data={data}></C>}></A>
	A组件: {this.props.render(内部state数据)}
	C组件: 读取A组件传入的数据显示 {this.props.data} 

### 应用: 
	在react-router中通过render props指定路由界面, 而不用再定义路由组件
	<Route path="/home" render={() => <div>Home</div>} />

## 6. 路由组件懒加载

### 文档：
	https://zh-hans.reactjs.org/docs/code-splitting.html

### react路由组件懒加载
	1) 通过import()函数动态加载路由组件 ===> 路由组件代码会被code split(代码分割)单独打包
	2) 通过React的lazy函数包装 ==> 请求时才去后台加载对应的打包文件(xxx.js)
	3) 通过<Suspense>指定在加载得到路由打包文件前显示一个自定义loading界面


## 7. Hooks

### 文档: 
	https://zh-hans.reactjs.org/docs/hooks-intro.html

### 工厂函数组件与ES6类组件的区别?
	1) 函数组件没有this, 类组件有this
	2) 函数组件没有state/props/refs属性, 组件对象有
		state ==> hooks的useState()
		props ==> 函数参数
		refs ==> React.forwardRef()
	3) 函数组件没有生命周期勾子, 如:
		componentDidMount()
		componentDidUpdate()
		componentWillUnmount()

### Hooks
	理解: 
		react新语法(函数),  让函数组件也可以有状态以及类似生命周期的处理(当然不止这么多)
	常用的hooks:
		useState(): 让函数组件拥有状态, 可以读取和更新状态数据
		useEffect(): 让函数组件可以在DidMount()时执行副作用操作, 常用的就是发ajax请求/启动定时器/订阅消息
		useRef(): 2个作用: 1.标识组件内的标签对象, 2.存储一个可变数据(类似于在组件对象上添加一个可变的属性)
		useContext(): 读取外层组件提供的Context数据