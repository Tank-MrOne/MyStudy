//引入 express
const express = require('express');

//创建应用对象
const app = express();

//jsonp-server 创建路由规则
app.get('/jsonp-server', (request, response)=>{
    //获取url中的 callback 参数
    let cbName = request.query.callback;// cb
    //数据
    let data = {
        name: '尚硅谷',
        cities: ['北京','上海','深圳']
    }
    let str = JSON.stringify(data);
    response.end(`${cbName}('${str}')`);// cb()  abc()
});

//cors 响应头设置
app.all('/server', (request, response)=>{
    //设置响应头 允许跨域请求   * 通配符 所有  
    response.setHeader("Access-Control-Allow-Origin","*");  
    //返回数据
    response.send('服务器端数据');
});

//
app.listen(8001, ()=>{
    console.log('服务已经启动.....');
});