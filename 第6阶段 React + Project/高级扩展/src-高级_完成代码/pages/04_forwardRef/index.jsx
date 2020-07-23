import React, { Component } from 'react'

/* 
文档: https://zh-hans.reactjs.org/docs/forwarding-refs.html

前置理解
	refs的作用:
	  1). 标识组件内的HTML标签 ==> 得到真实DOM对象 ==> 直接操作真实DOM (尽量少使用)
	  2). 标识组件内的子组件标签 ==> 得到组件对象 ==> 与子组件进行相互通信
	问题:
	  ref无法标识一个函数组件标签(因为没有组件实例对象)
	疑问: 
	  如果想操作函数组件内的HTML标签, 怎么办?
refs转发
	语法: React.forwardRef(FunctionComp)
	作用: 在函数组件外部通过ref得到函数组件内部的标签, 从而操作其内部标签
	应用: Link/NavLink就使用了此技术来封装, 来在组件外部获取操作内部包含的a标签
*/
export default class ForwardRef extends Component {

  // 用来标识函数子组件内的html标签
  funRef = React.createRef()

  render() {
    return (
      <div>
        <button onClick={() => {
          console.log(this.funRef.current)
        }}>读取函数组件内部的标签</button>

        <FrComp name="Tom" age={12} ref={this.funRef}/>

      </div>
    )
  }
}

// 用来标识HTML标签的ref容器
const htmlRef = React.createRef()

const FrComp = React.forwardRef(
  function FunComp (props, ref) { // ref是外部创建的ref容器对象
    console.log('ref', ref)
    return (
      <div ref={ref}>
        <h3 ref={htmlRef}>{props.name}---{props.age}</h3>
        <button onClick={() => {
          alert(htmlRef.current.innerHTML)
        }}>测试ref标识DOM标签</button>
      </div>
    )
  }
)