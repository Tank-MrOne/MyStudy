function Compile(el, vm) {
    //传递过来的参数是#root和vm对象
    //先把vm对象保存到解析器对象身上$vm属性上
    this.$vm = vm;
    //获取我们的#root对应的div
    this.$el = this.isElementNode(el) ? el : document.querySelector(el);

    
    if (this.$el) {
        //把div内部的所有子节点转移到fragment碎片文档当中
        this.$fragment = this.node2Fragment(this.$el);

        //初始化的意思，最终是把data当中和模板表达式对应的属性的值，赋值给文本节点
        this.init();


        this.$el.appendChild(this.$fragment);
    }
}

Compile.prototype = {
    node2Fragment: function(el) {
        var fragment = document.createDocumentFragment(),
            child;

        // 将原生节点拷贝到fragment
        while (child = el.firstChild) {
            fragment.appendChild(child);
        }

        return fragment;
    },

    init: function() {
        //解析元素，传递的参数就是拥有div内部所有子节点的fragment对象
        this.compileElement(this.$fragment);
    },

    compileElement: function(el) {
        //获取到fragment内部所有的子节点
        var childNodes = el.childNodes,//伪数组[text,p,text]
            me = this;

        [].slice.call(childNodes).forEach(function(node) {
            //遍历fragment内部所有的子节点
            var text = node.textContent;//拿到节点的内容
            var reg = /\{\{(.*)\}\}/;//定义一个匹配{{exp}}的正则对象

            if (me.isElementNode(node)) {
                //判断当前遍历的这个节点是不是元素节点，如果是就当元素节点去解析
                me.compile(node);//解析元素节点，本质是在解析属性（指令）

            } else if (me.isTextNode(node) && reg.test(text)) {
                //如果不是元素节点，再去判断看是不是文本节点并且文本节点的内容是匹配上面的正则的

                //如果匹配，那么就当文本节点去解析
                me.compileText(node, RegExp.$1);//RegExp.$1 ==== msg
            }

            //去判断我们遍历的这个节点是不是还有子节点，如果有也得一一解析（递归）
            if (node.childNodes && node.childNodes.length) {
                me.compileElement(node);
            }
        });
    },

    compile: function(node) {
        //如果是元素节点，那么就会到这个方法当中去解析指令（特殊的属性）
        var nodeAttrs = node.attributes,//拿到元素节点的所有属性
            me = this;

        [].slice.call(nodeAttrs).forEach(function(attr) {
            var attrName = attr.name;
            if (me.isDirective(attrName)) {
                var exp = attr.value;
                var dir = attrName.substring(2);
                // 事件指令
                if (me.isEventDirective(dir)) {
                    compileUtil.eventHandler(node, me.$vm, exp, dir);
                    // 普通指令
                } else {
                    compileUtil[dir] && compileUtil[dir](node, me.$vm, exp);
                }

                node.removeAttribute(attrName);
            }
        });
    },

    compileText: function(node, exp) {
        //拿到p内部的文本节点和{{}}当中的msg表达式作为参数传递过来

        compileUtil.text(node, this.$vm, exp);
    },

    isDirective: function(attr) {
        return attr.indexOf('v-') == 0;
    },

    isEventDirective: function(dir) {
        return dir.indexOf('on') === 0;
    },

    isElementNode: function(node) {
        return node.nodeType == 1;
    },

    isTextNode: function(node) {
        return node.nodeType == 3;
    }
};

// 指令处理集合
var compileUtil = {
    text: function(node, vm, exp) {
        //node 就是p内部的文本节点
        //vm就是vm对象
        //exp就是我们的msg表达式
        this.bind(node, vm, exp, 'text');
    },

    html: function(node, vm, exp) {
        this.bind(node, vm, exp, 'html');
    },

    model: function(node, vm, exp) {
        this.bind(node, vm, exp, 'model');

        var me = this,
            val = this._getVMVal(vm, exp);
        node.addEventListener('input', function(e) {
            var newValue = e.target.value;
            if (val === newValue) {
                return;
            }

            me._setVMVal(vm, exp, newValue);
            val = newValue;
        });
    },

    class: function(node, vm, exp) {
        this.bind(node, vm, exp, 'class');
    },

    bind: function(node, vm, exp, dir) {
        //node 还是p的内部文本节点
        //vm 还是我们的vm
        //exp msg表达式
        //dir ‘text’
        //找到updater对象当中的textUpdater方法，保存到变量当中
        var updaterFn = updater[dir + 'Updater'];//var updaterFn = updater[textUpdater]
        
        //判断如果这个方法存在，那么就调用这个方法
        updaterFn && updaterFn(node, this._getVMVal(vm, exp));

        //this._getVMVal(vm, exp) 是在data当中去获取和表达式名字相同的属性的值
        //调用完成上面的函数之后，模板语法插值语法就被赋值给真正的数据（赵丽颖）




        new Watcher(vm, exp, function(value, oldValue) {
            updaterFn && updaterFn(node, value, oldValue);
        });
    },

    // 事件处理
    eventHandler: function(node, vm, exp, dir) {
        var eventType = dir.split(':')[1],
            fn = vm.$options.methods && vm.$options.methods[exp];

        if (eventType && fn) {
            node.addEventListener(eventType, fn.bind(vm), false);
        }
    },

    _getVMVal: function(vm, exp) {
        //vm就是vm
        //exp就是msg表达式

        var val = vm._data;//拿的就是我们的data
        exp = exp.split('.');//['msg']

        exp.forEach(function(k) {
            val = val[k];//从data当中获取msg为属性的值
        });
        return val;
    },

    _setVMVal: function(vm, exp, value) {
        var val = vm._data;
        exp = exp.split('.');
        exp.forEach(function(k, i) {
            // 非最后一个key，更新val的值
            if (i < exp.length - 1) {
                val = val[k];
            } else {
                val[k] = value;
            }
        });
    }
};


var updater = {
    textUpdater: function(node, value) {
        //就是把赵丽颖这个数据赋值给p内部的文本节点的文本
        node.textContent = typeof value == 'undefined' ? '' : value;
    },

    htmlUpdater: function(node, value) {
        node.innerHTML = typeof value == 'undefined' ? '' : value;
    },

    classUpdater: function(node, value, oldValue) {
        var className = node.className;
        className = className.replace(oldValue, '').replace(/\s$/, '');

        var space = className && String(value) ? ' ' : '';

        node.className = className + space + value;
    },

    modelUpdater: function(node, value, oldValue) {
        node.value = typeof value == 'undefined' ? '' : value;
    }
};