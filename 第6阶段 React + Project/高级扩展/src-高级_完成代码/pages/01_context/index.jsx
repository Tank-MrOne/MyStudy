import React, { Component } from 'react'

/* 
文档: https://zh-hans.reactjs.org/docs/context.html

Context: 组件间通信方式, 常用用于祖孙组件间相互通信
使用:
  1. 创建Context容器对象
    const xxxContext = React.createContext(defaultValue)  // defaultValue只有没指定Provider时才有效果, 可以不用指定
  2. 在最外层包上Provider, 并指定要传递给后代组件的数据(任意类型)
    <xxxContext.Provider value={数据}>子组件</xxxContext.Provider>
  3. 任意后代组件, 读取数据
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
应用:
  react-redux就是利用context来向后代容器组件提供store的
  react-router利用context向路由提供路由相关对象
注意: 
  在应用开发中一般不用context, 一般都它的封装react插件
*/

const numContext = React.createContext()
console.log(numContext)

export default class ContextTest extends Component {

  state = {
    num: 1
  }

  setNum = (num) => {
    this.setState({ num })
  }

  render() {
    const {num} = this.state
    return (
      <div>
        <h1 onClick={() => this.setState({num: num + 1})}>祖组件: {num}</h1>
        <numContext.Provider value={{num, setNum: this.setNum}}>
          <Child/>
        </numContext.Provider>
      </div>
    )
  }
}

class Child extends Component {

  render () {
    return (
      <div>
        <h2>子组件</h2>
        <GrandChild/>
        <GrandChild2/>
      </div>
    )
  }
}

// 类组件
class GrandChild extends Component {
  // 声明接收content
  static contextType = numContext

  render () {
    const {num, setNum} = this.context
    return (
      <div>
        <h3 onClick={() => setNum(num + 1)}>孙组件(类): {num}</h3>
      </div>
    )
  }
}

// 函数组件
function GrandChild2 (props) {
  return (
    <div>
      <numContext.Consumer>
        {
          value => <h3 onClick={() => value.setNum(value.num + 2)}>孙组件(函数): {value.num}</h3>
        }
      </numContext.Consumer>
    </div>
  )
}