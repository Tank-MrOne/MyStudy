import React, {Component} from 'react'
/* 
文档：https://zh-hans.reactjs.org/docs/code-splitting.html

react路由组件懒加载
1. 通过import()函数动态加载路由组件 ===> 路由组件代码会被code split(代码分割)单独打包
2. 通过React的lazy函数包装 ==> 请求时才去后台加载对应的打包文件(xxx.js)
3. 通过<Suspense>指定在加载得到路由打包文件前显示一个自定义loading界面
*/
export default class Lazyload extends Component {
  render() {
    return (
      <div>
        Lazyload组件
      </div>
    )
  }
}
