/* 
用来管理用户数据的vuex模块
*/

import { getUserTempId, saveUserInfo, getUserInfo, removeUserInfo } from '@/utils'
import {reqRegister, reqLogin, reqLogout} from '@/api'

export default  {
  state: {
    userInfo: getUserInfo(),  // 从local中读取保存的用户信息作为初始值
    userTempId: getUserTempId()  // 用户临时ID, 获取函数只执行一次
  },
  mutations: {
    RECEIVE_USER_INFO (state, {userInfo}) {
      state.userInfo = userInfo
    },

    RESET_USER_INFO (state) {
      state.userInfo = {}
    }
  },
  actions: {

    /* 
    退出登陆
    */
    async logout ({commit}) {
      const result = await reqLogout()
      if (result.code===200) {
        // 清除vuex中的用户信息
        commit('RESET_USER_INFO')
        // 清除localStorage中的用户信息
        removeUserInfo()
      } else {
        // throw new Error(result.message || '退出登陆失败')
        alert(result.message || '退出登陆失败')
      }
    },

    /* 
    注册的异步action
    */
    async register (context, userInfo) {
      const result = await reqRegister(userInfo)
      if (result.code!==200) {
        throw new Error(result.data || result.message || '注册失败')
      }
    },

    /* 
    登陆的异步action
    */
    async login ({commit}, {mobile, password}) {
      const result = await reqLogin(mobile, password)
      if (result.code===200) { // 登陆成功了
        const userInfo = result.data
        // 将用户信息对象提交给mutation保存到state
        commit('RECEIVE_USER_INFO', {userInfo})

        // 将用户信息保存到local中
        saveUserInfo(userInfo)

      } else { // 登陆失败了
        throw new Error(result.data || result.message || '登陆失败')
      }
    }
  },
  getters: {},
}