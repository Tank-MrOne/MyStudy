
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
        //1. 改变 promise 对象的状态
        self.status = "resolved";
        //2. 保存成功的数据
        self.data = value;
        if (self.callbacks.length > 0) {
            //成功状态时,  执行成功回调函数
            // self.callbacks[0].success(self.data);
            self.callbacks.forEach(fnObj => {
                fnObj.success(self.data);
            })
        }
    }

    //reject  
    function reject(reason) {
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
        onResolved(self.data);
    }

    //promise 失败的情况
    if (self.status === "rejected") {
        onRejected(self.data);
    }

    //promise pending的状态
    if (self.status === 'pending') {
        // 保存回调函数  保存到哪儿
        self.callbacks.push({ success: onResolved, fail: onRejected }); // ????
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
