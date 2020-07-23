/* 
redux最核心的管理对象
*/
import {createStore} from '../lib/redux'
// import {createStore} from 'redux'
import reducer from './reducer'

// 创建store对象
const store = createStore(reducer) // 内部会自动调用reducer得到一个state值作为内部state的初始值

// 暴露store
export default store