import React, { Component, useState, useEffect, useRef, useContext } from 'react'
import ReactDOM from 'react-dom'
import PubSub from 'pubsub-js'

/* 
文档: https://zh-hans.reactjs.org/docs/hooks-intro.html

工厂函数组件与ES6类组件的区别?
  1. 函数组件没有this, 类组件有this
  2. 函数组件没有state/props/refs属性, 组件对象有
      state ==> hooks的useState()
      props ==> 函数参数
      refs ==> React.forwardRef()
  3. 函数组件没有生命周期勾子
      componentDidMount()
      componentDidUpdate()
      componentWillUnmount()
Hooks
  理解: react新语法(函数),  让函数组件也可以有状态以及类似生命周期的处理(当然不止这么多)
  常用的hooks:
    useState(): 让函数组件拥有状态, 可以读取和更新状态数据
    useEffect(): 让函数组件可以在DidMount()时执行副作用操作, 常用的就是发ajax请求/启动定时器/订阅消息
    useRef(): 2个作用: 1.标识组件内的标签对象, 2.存储一个可变数据(类似于在组件对象上添加一个可变的属性)
    useContext(): 读取外层组件提供的Context数据
*/
const MyContext = React.createContext()

export default class Hooks extends Component {
  render() {
    return (
      <>
        <Hooks1 />

        <MyContext.Provider value={'tom'}>
          <Hooks2 />
        </MyContext.Provider>
      </>
    )
  }
}

function Hooks1(props) {
  // 创建state数据和更新状态数据的函数
  const [count, setCount] = useState(2)
  
  /* 
  指定带副作用的回调函数
  此时相当于 componentDidMount() 与 componentDidUpdate()
  */
  useEffect(() => {
    document.title = count
  })

  useEffect(() => {
    // 需求: 2S后增加让count加1
    const timeoutId = setTimeout(() => {
      setCount(count => count + 1)
    }, 2000)

    // 订阅消息
    PubSub.subscribe('xxx', (msg, data) => {})
    console.log('订阅了消息')

    /* 
    返回的函数会在组件卸载前执行
    相当于componentWillUnmount()
    */
    return () => {
      // 清除定时器
      clearTimeout(timeoutId)

      // 取消订阅
      PubSub.unsubscribe('xxx')
      console.log('取消消息订阅')
    }
  }, [])

  function handleClick () {
    setCount(count + 1)
  }

  function destroy() {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }

  return (
    <div>
      <p>点击次数 {count}</p>
      <button onClick={handleClick}>点击</button> &nbsp;
      <button onClick={destroy}>卸载组件</button>
    </div>
  )
}

function Hooks2(props) {
  // 读取Context对象中的value数据
  const value = useContext(MyContext)

  const [name, setName] = useState(value)
  // 创建一个用于保存标签的ref容器 ==> 功能与React.createRef()一样
  const nameRef = useRef(null)
  // 创建一个用于保存任意数据的容器 ==> 相当于给组件对象添加了一个非state属性
  const idRef = useRef(1)

  const handleChange = (e) => {
    setName(e.target.value.trim())
  }

  const handleClick1 = () => {
    nameRef.current.focus()
  }

  const handleClick2 = () => {
    alert(++idRef.current)
  }

  return (
    <>
      <h2>Hooks标题</h2>
      <input type="text" value= {name} onChange={handleChange} ref={nameRef}/> &nbsp;
      <button onClick={handleClick1}>点击插入</button>&nbsp;
      <button onClick={handleClick2}>点击生成一个新ID</button> 
    </>
  )
}
