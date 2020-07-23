import React, { Component, PureComponent } from 'react'

/* 
组件优化

Component的2个问题 
  1. 只要执行setState(),即使不改变状态数据, 组件也会重新render()
  2. 只当前组件重新render(), 就会自动重新render子组件 
  ==> 效率低
效率高的做法:
  只有当组件的state或props数据发生改变时才重新render()
原因:
  Component中的shouldComponentUpdate()总是返回true
解决:
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
*/
export default class Optimize extends Component {
  state = {
    m1: {
      count: 1
    }
  }

  handleClick = () => {
    this.setState({})
  }

  render() {
    console.log('---Optimize render()')
    const {m1} = this.state
    return (
      <div>
        <h2>父组件标题: m1.count: {m1.count}</h2>
        <button onClick={this.handleClick}>假更新</button>
        <br/>
        <br/>
        <Child m1={m1}></Child>
      </div>
    )
  }
}

// class Child extends Component {
class Child extends PureComponent {

  state = {
    m2: {
      count2: 2
    }
  }

  // 假更新(没有变化)
  handleClick = () => {
    this.setState({})
  }

  // 正确更新
  handleClick2 = () => {
    this.setState({
      m2: {
        count2: this.state.m2.count2 + 1
      }
    })
  }

  // 错误更新
  handleClick3 = () => {
    const m2 = this.state.m2
    m2.count2 = m2.count2 + 1
    this.setState({
      m2
    })
  }


  /* shouldComponentUpdate (nextProps, nextState) {
    // 如果接收外部属性m1没变且内部的状态数据m2也没变, 返回false ==> 不需要重新render()
    if (this.props.m1===nextProps.m1 && this.state.m2===nextState.m2) {
      return false
    }
    // 否则返回true ==> 需要重新render
    return true
  } */

  render() {
    console.log('+++Child render()')
    const {m2} = this.state
    return (
      <div>
        <h3>子组件标题: m2.count2: {m2.count2}</h3>
        <h3>m1.count: {this.props.m1.count}</h3>
        
        <button onClick={this.handleClick}>假更新</button> &nbsp;
        <button onClick={this.handleClick2}>正确更新</button> &nbsp;
        <button onClick={this.handleClick3}>错误更新</button> &nbsp;
      </div>
    )
  }
}

