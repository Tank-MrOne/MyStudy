(function (window) {
    console.log("ours");
    class Promise {
        //构造方法
        constructor(executor) {
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

        //实例方法 then
        then(onResolved, onRejected) {
            let self = this;
            //回调函数的默认值设置
            if (typeof onResolved !== 'function') {
                onResolved = v => v;
            }
            if (typeof onRejected !== 'function') {
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

        //实例方法 catch
        catch(onRejected) {
            return this.then(undefined, onRejected);
        }

        //静态方法 resolve
        static resolve(value) {
            return new Promise((resolve, reject) => {
                //判断
                if (value instanceof Promise) {
                    value.then(resolve, reject);
                } else {
                    resolve(value);
                }
            });
        }

        //静态方法 reject
        static reject(reason) {
            return new Promise((resolve, reject) => {
                reject(reason);
            })
        }

        //
        static all(promises) {
            return new Promise((resolve, reject) => {
                //用来保存 promise 成功的值
                let pValues = [];
                //表示变量
                let flag = 0;
                //遍历数
                for (let i = 0; i < promises.length; i++) {
                    //得到当前的 promise 对象
                    promises[i].then(v => {
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
        static race(promises) {
            return new Promise((resolve, reject) => {
                for (let i = 0; i < promises.length; i++) {
                    promises[i].then(value => {
                        resolve(value);
                    }, reason => {
                        reject(reason);
                    })
                }
            });
        }
    }

    window.Promise = Promise;
})(window)