/* 
入口js
*/
import Vue from 'vue'
import 'swiper/css/swiper.min.css' // 如果需要查找包下的非主模块, 需要指定后面的路径

// import App from './App.vue'
import App from '@/App'
import router from './router'
import store from './store'
import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'
import './mock/mockServer'
import './validate'
import * as API from '@/api'  // 引入所有接口请求函数并包装在API对象中
import './elements'
import VueLazyload from 'vue-lazyload'
import loading from '@/assets/images/loading.gif'

// 配置vue的插件
Vue.use(VueLazyload, { // 内部自定义一个指令: lazy
  loading,  // 配置loading图片
})

Vue.config.productionTip = false // 去掉不是生产环境的提示

// 让所有组件对象可以直接看到API对象
Vue.prototype.$API = API


// 注册全局组件
Vue.component('TypeNav', TypeNav)
Vue.component('Carousel', Carousel)
Vue.component('Pagination', Pagination)

// 给Vue原型对象指定事件总线对象(vm对象)
// Vue.prototype.$bus = new Vue()

new Vue({

  beforeCreate() {
    // 给Vue原型对象指定事件总线对象(当前vm对象)
    Vue.prototype.$bus = this
  },
  // el: '#app'
  render: h => h(App), // 将App组件的对象界面渲染到页面上
  router, // 配置路由器  所有组件对象都可以通过$router属性得到router对象
  store, // 配置vuex的store  所有组件对象都可以通过$store属性得到store对象
}).$mount('#app')
