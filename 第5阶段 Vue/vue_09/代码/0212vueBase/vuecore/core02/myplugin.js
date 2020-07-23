(function(w){
    //个插件必须是一个对象，而且这个对象必须有一个方法叫install方法
    const MyPlugin = {}

    MyPlugin.install = function (Vue, options) {
        // 1. 添加全局方法或属性
        Vue.myGlobalMethod = function () {
            console.log('Vue的全局方法被调用myGlobalMethod')
        }
        // 2. 添加一个全局资源、、自定义一个全局指令
        Vue.directive('upper',function(el,binding){
            el.textContent = binding.value.toUpperCase()
        })

        // 3. 添加一个实例方法
        Vue.prototype.$myMethod = function (methodOptions) {
            console.log('Vue实例的方法被调用$myMethod')
        }
    }

    w.MyPlugin = MyPlugin
})(window);