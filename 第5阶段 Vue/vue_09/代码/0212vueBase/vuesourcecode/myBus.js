(function(w){
    //全局事件总线说白了就是一个对象
    let bus = {}
    let listenContainer = {}


    // {
    //     e1:[fn,fn1]
    // }
    //全局事件总线会有相应的方法
    bus.$on = function(eventType,callBack){
        //是不是需要把这个回调函数存储起来，等emit了以后去调用
        //先去看对象当中有没有以传递过来的事件类型为属性的数组存在
        if(!listenContainer[eventType]){
            listenContainer[eventType] = []
        }
        //把回调函数存储到对应的数组当中
        listenContainer[eventType].push(callBack)
    }


    bus.$emit = function(eventType){
        //emit主要就是用来去调用我们前面存储的相应的回调函数
        if(listenContainer[eventType] && listenContainer[eventType].length > 0){
            listenContainer[eventType].forEach( item => item())
        }
    }


    bus.$off = function(eventType){
        //解绑事件本质就是把回调函数给删除了
        delete listenContainer[eventType]
    }
    w.bus = bus
})(window)