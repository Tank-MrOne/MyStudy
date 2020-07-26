
//构造函数 Promise
function Promise(executor) {
    let self = this;// self _this that
    //设置对象属性 
    self.status = 'pending';
    self.data = undefined;
    //resolve 是函数
    function resolve(value) {
        //1. 改变 promise 对象的状态
        self.status = "resolved";
        //2. 保存成功的数据
        self.data = value;
    }

    //reject
    function reject(reason) {
        //修改状态
        self.status = "rejected";
        self.data = reason;
    }z

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
}





// function Person(){
//     //添加
//     // this.run = function(){

//     // }
// }
// Person.prototype.run = function(){

// }


// let p = new Person;
// p.run();
