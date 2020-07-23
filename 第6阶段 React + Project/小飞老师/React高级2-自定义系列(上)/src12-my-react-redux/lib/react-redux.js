import React, { Component } from 'react'
import PropTypes from 'prop-types'

/* 
自定义react-redux的核心语法
1) Provider组件
  1.作用: 将接收的store全局共享给所有的容器组件(Provider的后代组件)
  2.使用: <Provider store={store}> <App/> </Provider>
2) connect函数

编码实现
1.利用Context将接收的store传递给需要引用store所有后代组件
  (1)创建Context容器对象StoreContext ==> 用于传递store对象
  (2)Provider组件中: 通过<StoreContext.Provider value={store}>向后代组件提供store
  (3)容器组件中: 通过StoreContext得到store, 从而向UI组件传入特定的一些操作store中的state数据的props
2.动态确定要传递给UI组件的属性
  (1)一般属性: 调用mapStateToProps(state)得到的对象的所有属性
  (2)函数属性: 根据mapDispatchToProps的类型做不同处理
      ①函数: 直接调用mapDispatchToProps(dispatch)得到的对象的所有方法
      ②对象: 遍历生成新的包含n个方法的对象, 每个方法内部都执行dispatch
*/


// (1)创建Context容器对象StoreContext ==> 用于传递store对象
const StoreContext = React.createContext()

/**
 * 1) Provider组件
 */
export class Provider extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  }

  render () {
    const {store, children} = this.props
    // (2)Provider组件中: 通过<StoreContext.Provider value={store}>向后代组件提供store

    return (
      <StoreContext.Provider value={store}>
        {children}  {/* 外部指定的<App/> */}
      </StoreContext.Provider>
    ) 
  }
}

/**
 * 2) connect函数
 * @param {*} mapStateToProps 
 * @param {*} mapDispatchToProps 
 */
export function connect(mapStateToProps, mapDispatchToProps) {
  
  // 返回一个高阶组件函数
  return (UIComponent) => { // 传入的就是App
    // 返回一个容器组件
    return class extends Component {
      // 声明一个在调试工具中显示的友好名称
      static displayName = `connect(${UIComponent.diplayName || UIComponent.name || 'Component' })`

      // (3)容器组件中: 通过StoreContext得到store, 从而向UI组件传入特定的一些操作store中的state数据的props
      // 声明读取context容器对象中的value
      static contextType = StoreContext // 组件对象就多了context属性, 值为store对象

      componentDidMount () {
        // 得到store
        const store = this.context
        // 绑定用于更新组件的监听
        this.unsubscribe = store.subscribe(() => {
          this.setState({}) // 只要setState()就会导致重新render
        })
      }

      /* 
      死亡前解除订阅
      */
      componentWillUnmount () {
        this.unsubscribe()
      }

      render () {
        // 得到store
        const store = this.context

        // 确定向UI组件传递的所有一般属性
        const stateProps = mapStateToProps(store.getState())

        // 确定向UI组件传递的所有函数属性
        let dispatchProps
        if (typeof mapDispatchToProps==='function') { // mapDispatchToProps是函数
          dispatchProps = mapDispatchToProps(store.dispatch)
        } else { // mapDispatchToProps是对象
          /* 
          mapDispatchToProps的结构:
            {
              increment: (number) => ({type: INCREMENT, data: number}),
              decrement: (number) => ({type: DECREMENT, data: number})
            }
          dispatchProps:
            {
              increment: (number) => dispatch(increment(number)),
              increment: (...args) => dispatch(increment(...args)), // 函数参数透传
              decrement: (number) => dispatch(decrement(number)),
            }
          */
          dispatchProps = {}
          // 根据mapDispatchToProps中的每个actionCreator函数包装定义一个包含dispatch语句的函数
          Object.keys(mapDispatchToProps).forEach(key => {
            // 添加到dispatchProps中
            dispatchProps[key] = (...args) => store.dispatch(mapDispatchToProps[key](...args)) // 函数参数透传
          })
        }

        // 渲染的是UI组件, 需要向其传入一般属性与函数属性
        return <UIComponent {...stateProps} {...dispatchProps}/>
      }
    }
  }
}