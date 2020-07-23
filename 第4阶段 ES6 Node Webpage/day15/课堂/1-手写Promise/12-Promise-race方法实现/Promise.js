console.log("ours");
//声明构造函数
function Promise(executor) {
    let self = this;
    //初始化
    self.status = "pending"; //初始状态
    self.data = undefined;
    self.callbacks = [];//保存异步任务的回调函数
    //声明
    function resolve(value) {
        //判断
        if (self.status !== "pending") return;
        //修改对象的状态
        self.status = "resolved";
        //保存成功的值
        self.data = value;
        //检查回调数组中是否存在数据
        setTimeout(function () {
            if (self.callbacks.length > 0) {
                self.callbacks.forEach(fnObj => {
                    fnObj.onResolved(self.data);
                });
            }
        })
    }

    function reject(reason) {
        //判断
        if (self.status !== "pending") return;
        //修改对象的状态
        self.status = "rejected";
        //保存成功的值
        self.data = reason;
        setTimeout(function () {
            //检查回调数组中是否存在数据
            if (self.callbacks.length > 0) {
                self.callbacks.forEach(fnObj => {
                    fnObj.onRejected(self.data);
                });
            }
        })
    }

    try {
        executor(resolve, reject);
    } catch (e) {
        reject(e);
    }
}

//添加 then 方法
Promise.prototype.then = function (onResolved, onRejected) {
    let self = this;
    //回调函数的默认值设置
    if (onResolved === undefined) {
        onResolved = v => v;
    }
    if (onRejected === undefined) {
        onRejected = reason => { throw reason };
    }

    return new Promise((resolve, reject) => {
        //封装函数
        function callback(type) {
            //获取回调函数的执行结果
            try {
                let result = type(self.data);
                //判断
                if (result instanceof Promise) {
                    result.then(resolve, reject);
                } else {
                    resolve(result);
                }
            } catch (e) {
                reject(e);
            }
        }

        //对对象的状态进行判断
        if (self.status === "resolved") {
            setTimeout(function () {
                //获取回调函数的执行结果
                callback(onResolved);
            })
        }
        //失败的情况
        if (self.status === "rejected") {
            setTimeout(function () {
                callback(onRejected);
            })
        }
        //pending的状态
        if (self.status === "pending") {
            //将回调函数保存到对象的身上
            self.callbacks.push({
                onResolved: function () {
                    //获取回调函数的执行结果
                    callback(onResolved);
                },
                onRejected: function () {
                    callback(onRejected);
                }
            });
        }
    });

}

//添加 catch 方法
Promise.prototype.catch = function (onRejected) {
    return this.then(undefined, onRejected);
}

//函数对象 resolve 
Promise.resolve = function (value) {
    return new Promise((resolve, reject) => {
        //判断
        if (value instanceof Promise) {
            value.then(resolve, reject);
        } else {
            resolve(value);
        }
    });
}

//函数对象 reject
Promise.reject = function (reason) {
    return new Promise((resolve, reject) => {
        reject(reason);
    })
}

//函数对象 all 方法实现
/**
 * 参数
 *      数组
 * 返回值
 *      promise 对象
 */
Promise.all = function (promises) {
    return new Promise((resolve, reject) => {
        //用来保存 promise 成功的值
        let pValues = [];
        //表示变量
        let flag = 0;
        //遍历数
        for (let i = 0; i < promises.length; i++) {
            //得到当前的 promise 对象
            promises[i].then(v => {
                //成功的情况
                //判断是否为 最后一个 promise
                // if(i === promises.length-1){
                //     pValues.push(v);
                //     resolve(pValues);
                // }else{
                //     pValues.push(v);
                // }
                // pValues.push(v);
                //将数据保存在数组中
                pValues[i] = v;
                // 标志位自增
                flag++;
                //判断标识变量是否等于数组的总长度
                if (flag === promises.length) {//同步操作
                    resolve(pValues);
                }
            }, r => {
                //如果一个 promise 失败, 则all返回的promise就是失败的
                reject(r);
            })
        }
    });
}

//函数对象 race 方法实现
Promise.race = function (promises) {
    return new Promise((resolve, reject) => {
        for(let i=0;i<promises.length;i++){
            promises[i].then(value=>{
                resolve(value);
            }, reason=>{
                reject(reason);
            })
        }
    });
}