function MVVM(options) {
    //把我们的配置对象给vm身上添加了一个$options
    this.$options = options;
    //把配置对象内部的data，给vm身上的_data属性
    var data = this._data = this.$options.data;
    //把vm给me这个局部变量
    var me = this;

    // 数据代理
    // 实现 vm.xxx -> vm._data.xxx
    Object.keys(data).forEach(function(key) {
        //遍历data当中所有的属性
        //每个属性都会调用下面这个方法
        me._proxy(key);
    });
    //这个函数调用牵扯的就是数据劫持（数据监视）
    observe(data, this);

    this.$compile = new Compile(options.el || document.body, this)
}

MVVM.prototype = {
    $watch: function(key, cb, options) {
        new Watcher(this, key, cb);
    },

    _proxy: function(key) {
        //这个方法，拿到data的属性，会根据这个属性在vm身上添加一个同名的属性
        
        var me = this;
        Object.defineProperty(me, key, {
            configurable: false,
            enumerable: true,
            get: function proxyGetter() {
                //当有人访问读取vm.msg的时候，真正是去data当中去拿的属性值
                return me._data[key];
            },
            set: function proxySetter(newVal) {
                //当有人修改vm.msg的时候，真正是去data当中去修改
                me._data[key] = newVal;
            }
        });
    }
};