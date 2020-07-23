function Observer(data) {
    //把我们传过来的data对象，给这个劫持对象身上属性添加，把data的地址给它一份
    this.data = data;

    //走起的意思，开始处理传递过来的数据源data
    this.walk(data);
}

Observer.prototype = {
    walk: function(data) {
        //把劫持对象保存给me
        var me = this;
        //把data当中的属性拿出来做成数组，然后遍历里面的每一个属性
        Object.keys(data).forEach(function(key) {
            me.convert(key, data[key]);
        });
    },
    convert: function(key, val) {
        //把data对象和msg和zhaoliying 传递调用
        this.defineReactive(this.data, key, val);
    },

    defineReactive: function(data, key, val) {
        //根据msg属性，实例化了一个dep对象，这个dep对象是和msg属性对应的
        var dep = new Dep();
        //如果当前这个属性值，又是一个对象，那么递归把这个对象当中所有的属性也去创建dep
        var childObj = observe(val);
        //给data当中每个对象的属性都添加getter和setter
        //做成响应式数据，其实就是为了以后能够检测到数据的变化而进一步更新页面

        Object.defineProperty(data, key, {
            enumerable: true, // 可枚举
            configurable: false, // 不能再define
            get: function() {
                if (Dep.target) {
                    dep.depend();
                }
                return val;
            },
            set: function(newVal) {
                if (newVal === val) {
                    return;
                }
                val = newVal;
                // 新的值是object的话，进行监听
                childObj = observe(newVal);
                // 通知订阅者
                dep.notify();
            }
        });
    }
};

function observe(value, vm) {
    //判断你传过来的data对象是不是一个对象
    if (!value || typeof value !== 'object') {
        return;
    }
    //实例化一个劫持对象
    return new Observer(value);
};


var uid = 0;

function Dep() {
    this.id = uid++;
    this.subs = [];
}

Dep.prototype = {
    addSub: function(sub) {
        this.subs.push(sub);
    },

    depend: function() {
        Dep.target.addDep(this);
    },

    removeSub: function(sub) {
        var index = this.subs.indexOf(sub);
        if (index != -1) {
            this.subs.splice(index, 1);
        }
    },

    notify: function() {
        this.subs.forEach(function(sub) {
            sub.update();
        });
    }
};

Dep.target = null;