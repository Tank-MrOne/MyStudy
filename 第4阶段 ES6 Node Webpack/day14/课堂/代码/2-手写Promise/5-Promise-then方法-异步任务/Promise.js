
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
            self.callbacks.forEach(fnObj => {
                //修改 then 返回的 promise 对象的状态
                fnObj.success(self.data);// 
            });
        }
    }

    //reject  
    function reject(reason) {
        //判断对象的状态
        if (self.status !== 'pending') return;
        //修改状态
        self.status = "rejected";
        self.data = reason;
        if (self.callbacks.length > 0) {
            //失败状态时,  执行成功回调函数
            self.callbacks.forEach(fnObj => {
                fnObj.fail(self.data);
            })
        }
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
    //判断 promise 对象的状态
    const self = this;
    //promise 成功的情况
    if (self.status === "resolved") {
        return new Promise((resolve, reject) => {
            //根据回调函数的执行结果来 决定返回 promise 的状态
            try {
                let result = onResolved(self.data);
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
        });
    }

    //promise 失败的情况
    if (self.status === "rejected") {
        return new Promise((resolve, reject) => {
            try {
                //执行回调函数 获取它的结果
                let result = onRejected(self.data);
                //判断结果的类型
                if (result instanceof Promise) {
                    //如果是一个 Promise 对象
                    result.then(v => {
                        resolve(v);
                    }, r => {
                        reject(r);
                    })
                } else {
                    //如果不是 Promise 的情况
                    resolve(result);
                }
            } catch (e) {
                reject(e);
            }
        });
    }

    //promise pending的状态
    if (self.status === 'pending') {
        return new Promise((resolve, reject) => {
            // 保存回调函数  保存到哪儿
            self.callbacks.push({
                success: function () {
                    try {
                        //调用成功的回调函数
                        let result = onResolved(self.data);
                        //判断返回结果的类型
                        if (result instanceof Promise) {
                            result.then(v => {
                                resolve(v);
                            }, r => {
                                reject(r);
                            })
                        } else {
                            resolve(result);
                        }
                    } catch (e) {
                        reject(e);
                    }
                }, fail: function () {
                    try {
                        //首先执行then方法指定失败的回调函数
                        let result = onRejected(self.data);
                        //判断
                        if (result instanceof Promise) {
                            result.then(v => {
                                resolve(v);
                            }, r => {
                                reject(r);
                            });
                        } else {
                            resolve(result);
                        }
                    } catch (e) {
                        reject(e);
                    }
                }
            }); // ????
        });
    }
}



// function Person(){
//     this.name = 'xiaohigh'
// }

// Person.prototype.run = function(){

//     console.log(this.name);
// }

// let p = new Person;
// p.run();
