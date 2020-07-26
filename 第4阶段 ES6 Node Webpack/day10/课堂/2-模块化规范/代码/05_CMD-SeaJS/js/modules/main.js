define(function (require) {
    // var m1 = require('./module1')
    // var m4 = require('./module4')
    // m1()
    // m4()

    // setTimeout(function(){
    //     var m4 = require('./module4');
    //     m4();
    // }, 1000)

    //引入 percent 模块
    const percent = require('./percent');
    let btn = document.querySelector('button')
    //绑定事件
    btn.onclick = function(){
        let res = percent(20);
        if(res) {
            alert('中奖啦!!');
        }else{
            alert('sorry 再接再厉!!');
        }
    }

});

