import Vue from 'vue'
import App from './App' //把组装好的整体组件导入到入口文件，准备渲染
Vue.config.productionTip = false
new Vue({
    el:'#root',
    // render:function(createElement){
    //     createElement(App)
    // }
    // render:createElement => createElement(App)
    render: h => h(App)
    //第一步：把导入过来的App组件配置对象，在vue模板当中注册解析为一个标签名<App/>并使用
    //第二步：把这个标签在模板当中进行渲染

})