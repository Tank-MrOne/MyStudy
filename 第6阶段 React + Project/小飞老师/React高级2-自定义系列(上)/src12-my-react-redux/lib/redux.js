/* 
自定义redux库的核心语法
1) createStore(reducer) 创建store对象
  返回一个store对象, 包含3个方法
    getState(): 返回内部的state数据
    dispatch(action): 分发action
    subscribe(listener): 订阅store中state数据发生改变的监听

2) combineReducers(reducers) 合并多个reducer返回一个新的总reducer
  1.作用: 合并多个reducer函数返回一个管理总state的总reducer函数
  2.使用: combineReducers(reducers)
    (1)参数是包含多个reducer的对象, 返回值是产生总state的reducer
    (2)总state永远是对象类型, 内部包含各个子reducer返回的state数据
*/

/**
 * 创建store对象
 * @param {管理产生新的state数据的函数} reducer 
 */
export function createStore (reducer) {

  // 内部保存当前state数据
  let currentState = reducer(undefined, {type: '@@redux/INITz.x.f'})    // 初始值是调用reducer得到
  // 内部保存n个listener的容器数组
  const listeners = []

  /**
   * 得到内部保存的当前state数据
   */
  function getState () {
    return currentState
  }

  /**
   * 分发action
   * @param {包含type和data数据的对象} action 
   */
  function dispatch (action) {
    // 调用reducer产生新的state数据, 并保存为当前的state
    currentState = reducer(currentState, action)
    // 通知所有保存的Listener
    listeners.forEach(listener => listener())
  }

  /**
   * 订阅监听 监视内部state数据的改变
   * @param {*} listener 
   */
  function subscribe (listener) {
    // 保存listener
    listeners.push(listener)
    // 返回一个用于解绑监听的函数  ==> 从listeners中删除listener
    return () => listeners.splice(listeners.indexOf(listener), 1)
  }
  
  // 返回store对象
  return {
    getState,
    dispatch,
    subscribe
  }
}

/**
 * 合并多个reducer返回一个新的总reducer
 * @param {包含多个reducer函数的对象} reducers 
 */
export function combineReducers (reducers) {

  // 简洁编码实现: 数组的reduce方法
  // return (totalState={}, action) => {
  //   return Object.keys(reducers).reduce((pre, key) => {
  //     pre[key] = reducers[key](totalState[key], action)
  //     return pre
  //   }, {})
  // }


  // 返回一个新的总reducer
  return (totalState={}, action) => { // 接收的是当前总state
    // 准备一个空的新的总state对象
    const newTotalState = {}
    // 调用所有子reducer函数得到新的子state数据, 保存到新的总state对象中
    /* 
    reducers的结构
    {
      count: function count (state, action) { return count值},  // state必须是当前的count值
      user: function user (state, action) { return user对象值}, // state必须是当前的user值
    }
    totalState的结构:
      {
        count: 2,
        user: {}
      }
    */
    Object.keys(reducers).forEach(key => {
      // 得到对应的子reducer
      const reducer = reducers[key]
      // 得到对应的子state
      const state = totalState[key]
      // 调用reducer得到新的子state
      const newState = reducer(state, action)
      // 保存到新的总state对象中
      newTotalState[key] = newState
    })
   
    // 返回新的总state对象
    return newTotalState
  }
}
