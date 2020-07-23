import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from './lib/react-redux'
import {increment, decrement} from './redux/actions'
/* 
UI组件
*/
class App extends Component {

  static propTypes = {
    count: PropTypes.number,  // 声明接收一般属性
    increment: PropTypes.func, // 声明接收函数属性
    decrement: PropTypes.func,
  }

  // componentDidMount () {
  //   // 绑定store内部状态数据变化的监听 ==> 更新当前组件
  //   // 返回的是解绑监听的函数
  //   this.unsubscribe = this.props.store.subscribe(() => {
  //     console.log('----1')
  //     this.setState({}) // 只要setState()就会导致重新render
  //   })
  //   this.unsubscribe2 = this.props.store.subscribe(() => {
  //     console.log('----2')
  //   })
  // }

  // // 死亡前解除订阅
  // componentWillUnmount () {
  //   this.unsubscribe()
  // }
  
  increment = () => {
    const number = this.refs.number.value*1
    this.props.increment(number)
  }

  decrement = () => {
    const number = this.refs.number.value*1
    this.props.decrement(number)
  }

  incrementIfOdd = () => {
    const number = this.refs.number.value*1
    if (this.props.count%2===1) {
      this.props.increment(number)   
    }
  }

  incrementAsync = () => {
    const number = this.refs.number.value*1
    setTimeout(() => {
      this.props.increment(number)
    }, 1000);
  }

  render() {
    const count = this.props.count
    return (
      <div>
        <div>click {count} times</div>
        <br/>
        <select ref="number">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select> &nbsp;

        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>increment if odd</button>&nbsp;
        <button onClick={this.incrementAsync}>increment async</button>

        <br/>
        <button onClick={() =>  this.unsubscribe()}>解绑监听</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  count: state.count
})

// 函数(原始)写法
const mapDispatchToProps = (dispatch) => ({
  // increment: (number) => dispatch(increment(number)),
  increment: (...args) => dispatch(increment(...args)), // 函数参数透传 ==> 此处不太明确
  decrement: (number) => dispatch(decrement(number)),
})

// 对象写法
const mapDispatchToProps2 = {
  increment,
  decrement
}


export default connect(
  mapStateToProps, // 指向传递给UI组件的所有一般属性
  // mapDispatchToProps // 指向传递给UI组件的所有函数属性
  mapDispatchToProps2 // 指向传递给UI组件的所有函数属性
)(App)