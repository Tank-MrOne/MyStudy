//引入 express
const express = require('express');

//创建应用对象
const app = express();

//创建路由规则
app.get('/jsonp-server', (request, response)=>{
    //数据
    let data = {
        name: 'ATGUIGU',
        cities: ['bj','sh','sz']
    }
    //第一个阶段 返回可执行代码
    // response.send('console.log(456789)');
    //第二阶段返回数据  返回函数调用的字符串
    //将数据转为字符串 
    let str = JSON.stringify(data);
    console.log(`callback('${str}')`);
    // callback('{"name":"ATGUIGU","cities":["bj","sh","sz"]}')
    response.end(`callback('${str}')`);
});

//
app.listen(8000, ()=>{
    console.log('服务已经启动.....');
})