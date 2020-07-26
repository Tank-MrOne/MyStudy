//define 用来定义模块
define(function () {
    let msg = 'atguigu.com'

    function getMsg() {
        return msg.toUpperCase()
    }

    //return 用来暴露数据
    return { getMsg }
});