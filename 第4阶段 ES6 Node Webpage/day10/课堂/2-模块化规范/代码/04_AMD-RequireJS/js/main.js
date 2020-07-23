//配置模块
requirejs.config({
    //模块标识名与模块路径映射
    paths: {
        "loger": "modules/loger",
        "dataService": "modules/dataService",
        "jquery": "libs/jquery-1.10.1",
        "rand": "modules/rand",
        "percent": "modules/percent"
    }
});

//引入使用模块
requirejs(['loger'], function (loger) {
    // loger.showMsg()
});

//写事件绑定的代码
requirejs(['percent'], function(percent){
    // console.log('percent');
    //绑定事件
    let btn = document.querySelector('button');

    btn.onclick = function(){
        //获取概率触发结果
        let res = percent(20);
        if(res){
            alert('恭喜中奖啦!! 奖品为 10000 元劳斯莱斯优惠券')
        }else{
            alert('再接再厉');
        }
    }

});