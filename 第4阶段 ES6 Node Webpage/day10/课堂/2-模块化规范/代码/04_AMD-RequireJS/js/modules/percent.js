//引入 rand 模块
define(['rand'], function(rand){
    function percent(num){
        //获取一个 从 1-100 的随机数
        let n = rand(1,100);
        //判断
        if(n <= num){
            return true;
        }else{
            return false;
        }
    }

    //对外暴露 percent 函数
    return percent;
})


