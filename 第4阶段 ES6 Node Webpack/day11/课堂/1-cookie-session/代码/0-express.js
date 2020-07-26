//1. 引入 express 模块
const express = require('express');

//2. 创建应用对象
const app = express();

//3. 创建路由规则
// if(request.method === 'GET' && request.url === '/login'){}
app.get('/login', (request, response) => {
    //设置响应
    response.end('hello express');
});

app.get('/', (request, response)=>{
    response.send('网站首页');
});

//4. 服务启动
app.listen(8000, ()=>{
    console.log('express 服务已经启动, 8000 端口监听中....');
});