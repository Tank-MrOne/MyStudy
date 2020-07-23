console.log('ours');
//构造函数 Promise
function Promise(executor) {
    let self = this;// self _this that
    //设置对象属性 
    self.status = 'pending';
    self.data = undefined;
    //保存回调函数
    self.callbacks = [];
    //resolve 是函数
    function resolve(value) {
        //判断对象的状态
        if (self.status !== 'pending') return;
        //1. 改变 promise 对象的状态
        self.status = "resolved";
        //2. 保存成功的数据
        self.data = value;
        if (self.callbacks.length > 0) {
            //成功状态时,  执行成功回调函数
            // self.callbacks[0].success(self.data);
            setTimeout(() => {
                self.callbacks.forEach(fnObj => {
                    //修改 then 返回的 promise 对象的状态
                    fnObj.success(self.data);// 
                });
            })
        }
    }

    //reject  
    function reject(reason) {
        //判断对象的状态
        if (self.status !== 'pending') return;
        //修改状态
        self.status = "rejected";
        self.data = reason;
        setTimeout(() => {
            if (self.callbacks.length > 0) {
                //失败状态时,  执行成功回调函数
                self.callbacks.forEach(fnObj => {
                    fnObj.fail(self.data);
                })
            }
        });
    }

    try {
        //调用执行器函数
        executor(resolve, reject);
    } catch (e) {
        reject(e);
    }
}

//then 方法的添加  on当...时候 Resolved 成功的状态
Promise.prototype.then = function (onResolved, onRejected) {
    //检测
    // if(onRejected === undefined) {
    //     onRejected = reason => {throw reason}
    // }

    // if(onResolved === undefined) {
    //     onResolved = value => value;
    // }

    onRejected = onRejected !== undefined && typeof onRejected === "function" ? onRejected : reason => { throw reason };
    onResolved = onResolved !== undefined && typeof onRejected === "function" ? onResolved : v => v;

    //判断 promise 对象的状态
    const self = this;
    return new Promise((resolve, reject) => {
        //封装一个函数
        function callback(type) {
            try {
                let result = type(self.data);
                //判断result 的类型
                if (result instanceof Promise) {
                    //result 是一个promise的情况
                    result.then(v => {
                        //result 成功的情况 修改返回的 Promise 状态为成功
                        resolve(v);
                    }, r => {
                        reject(r);
                    });
                } else {
                    //修改返回的 promise 状态为成功
                    resolve(result);
                }
            } catch (e) {
                reject(e)
            }
        }

        //promise 成功的情况
        if (self.status === "resolved") {
            //根据回调函数的执行结果来 决定返回 promise 的状态
            setTimeout(() => {
                callback(onResolved);
            });
        }

        //promise 失败的情况
        if (self.status === "rejected") {
            setTimeout(() => {
                callback(onRejected);
            });
        }

        //promise pending的状态
        if (self.status === 'pending') {
            // 保存回调函数  保存到哪儿
            self.callbacks.push({
                success: function () {
                    callback(onResolved);
                }, fail: function () {
                    callback(onRejected);
                }
            });
        }
    });
}

//catch 方法的封装
Promise.prototype.catch = function (onRejected) {
    return this.then(undefined, onRejected);
}

// resolve  返回一个成功或者失败的 对象
Promise.resolve = function (value) {
    //返回一个 Promise 对象
    return new Promise((resolve, reject) => {
        if (value instanceof Promise) {
            //value 的结果 决定返回Promise的结果
            value.then(resolve, reject);
        } else {
            resolve(value);
        }
    });
}

//reject 返回一个失败的 Promise 对象
Promise.reject = function (reason) {
    return new Promise((resolve, reject) => {
        reject(reason);
    });
}


