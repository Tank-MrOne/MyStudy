//引入模块
const percent = require('./percent');

//绑定事件
let btn = document.querySelector('#choujiang');

//
btn.addEventListener('click', function(){
    //使用概率函数得到结果
    let res = percent(30);
    if(res){
        alert('恭喜您中奖啦!!');
    }else{
        alert('再接再厉!!');
    }
});
