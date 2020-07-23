/* 
管理购物车相关数据的vuex子模块
*/

import {reqCartList, reqCheckCartItem, reqAddToCart, reqDeleteCartItem} from '@/api'

export default  {
  state: {
    cartList: [], // 购物项的列表
  },

  mutations: {
    RECEIVE_CART_LIST (state, {cartList}) {
      state.cartList = cartList
    }
  },

  actions: {
    /* 
    获取购物车列表数据的异步action
    */
    async getCartList ({commit}) {
      const result = await reqCartList()
      if (result.code===200) {
        const cartList = result.data
        commit('RECEIVE_CART_LIST', {cartList})  // 提交给mutation是包含数据的对象
      }
    },

    /* 
    改变购物项的勾选状态的异步
    */
    async checkCartItem ({}, {skuId, isChecked}) {
      // 异步请求
      const result = await reqCheckCartItem(skuId, isChecked)

      if (result.code!==200) { // 操作失败
        throw new Error(result.message || '修改勾选状态操作成功')
      }
    },

    /* 
    对所有购物项实现全选或全不选
    */
   /* 
   context对象的结构:
   {
      state,      // 等同于 `store.state`，若在模块中则为局部状态
      commit,     // 等同于 `store.commit`   
      dispatch,   // 等同于 `store.dispatch`
      getters,    // 等同于 `store.getters`
    }
   */

    /* 
    这个异步action需要触发调用多个其它异步action
    几有分发的所有异步action都成功了, 当前异步action才成功, 只要有一个失败了, 当前异步action就失败
    */
    // async checkAllCartItems(context, checked) {
    async checkAllCartItems({state, commit, dispatch, getters}, checked) {
      const isChecked = checked ? 1 : 0
      const promises = []

      // 遍历所有购物项
      state.cartList.forEach(item => {
        // 购物项原本的勾选状态与要更新状态一样, 不需要发请求处理
        if (item.isChecked===isChecked)  return
        
        // 针对每个购物项, 分发给checkCartItem, 让它去请求更新某个购物项的勾选状态
        const promise = dispatch('checkCartItem',  {skuId: item.skuId, isChecked})
        // 将每个异步action的promise添加到数组中
        promises.push(promise)
      })

      // 利用Promise.all()来实现对多个异步操作的promise的管理
      return Promise.all(promises)
    },

    /* 
    添加商品到购物车的异步action
    */
    async addToCart ({commit}, {skuId, skuNum, callback}) {
      const result = await reqAddToCart(skuId, skuNum)
      if (result.code===200) { // 添加到购物车成功
        console.log('添加到购物车成功')
        callback() // 成功了不传递错误信息
        // callback({status: 0, message: '添加到购物车成功'})
      } else { // 失败
        console.log('添加到购物车失败')
        callback('添加到购物车失败') // 失败了, 需要传递错误信息
        // callback({status: 1, message: '添加到购物车失败'})
      }
    },


    async addToCart2 ({commit}, {skuId, skuNum}) {
      const result = await reqAddToCart(skuId, skuNum)
      if (result.code===200) { // 添加到购物车成功
        // console.log('添加到购物车成功')
        return '' // async函数的promise是成功的, value是''
      } else { // 失败
        // console.log('添加到购物车失败')
        return '添加到购物车失败' // async函数的promise是成功的, value为errorMsg
      }
    },

    /* 
    添加到购物车的异步action
    如果是已经存在的购物项, 那是改变购物项中商品的数量

    skuId: 商品的id
    skuNum: 增加或者减少的数量
    */
    async addToCart3 ({commit}, {skuId, skuNum}) {
      const result = await reqAddToCart(skuId, skuNum)
      if (result.code!==200) { // 失败
        // console.log('添加到购物车失败')
        throw new Error('添加到购物车失败')   // async函数的promise就是失败的
      }
    },

    /* 
    删除一个购物项的异步action
    */
    async deleteCartItem (context, skuId) {
      const result = await reqDeleteCartItem(skuId)
      if (result.code!==200) { // 失败
        throw new Error('删除购物项失败')   // async函数的promise就是失败的
      }
    },

    /* 
    删除所有勾选的购物项的异步action
    */
    async deleteCheckedCartItems ({state, dispatch}) {

      // 遍历每个勾选的购物项去分发deleteCartItem
      const promises = state.cartList.reduce((pre, item) => {
        if (item.isChecked===1) {
          pre.push(dispatch('deleteCartItem', item.skuId))
        }
        return pre
      }, [])

      return Promise.all(promises)
    }
  },
  
  getters: {
    /* 
    已选中的商品的总数量
    */
    totalCount (state) {
      
      let total = 0
      state.cartList.forEach(item => {
        const {isChecked, skuNum} = item
        // 只有在当前购物项选中才累加
        if (isChecked===1) {
          total += skuNum
        }
      })

      return total

      // 使用array的reduce()来做累计累加操作
     /*  return state.cartList.reduce((pre, item) => {
        return item.isChecked===1 ? pre + item.skuNum : pre
      }, 0) */
    },

    /* 
    已选中的商品的总价格
    */
    totalPrice (state) {
      let total = 0
      state.cartList.forEach(item => {
        const {isChecked, cartPrice, skuNum} = item
        // 只有在当前购物项选中才累加
        if (isChecked===1) {
          total += cartPrice * skuNum
        }
      })
      return total

      /* 
      return state.cartList.reduce((pre, item) => {
        return item.isChecked===1 ? pre + item.skuNum*item*cartPrice : pre
      }, 0) */
    }
  },
}