import React, { Component } from 'react'

/* 
文档: https://zh-hans.reactjs.org/docs/context.html
*/

export default class ContextTest extends Component {

  render() {
    return (
      <div>
        <h1>祖组件</h1>
        <Child />
      </div>
    )
  }
}

class Child extends Component {

  render () {
    return (
      <div>
        <h2>子组件</h2>
      </div>
    )
  }
}