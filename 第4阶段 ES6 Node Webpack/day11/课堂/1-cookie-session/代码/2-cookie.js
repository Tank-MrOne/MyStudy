//1. 引入express模块
const express = require('express');
//引入 cookie-parser 模块
const cookieParser = require('cookie-parser');

//2. 创建应用对象
const app = express();
//设置 cookieParser 模块
app.use(cookieParser());

//3. 设置路由规则
app.get('/', (request, response)=>{
    response.send('首页')
});

//设置 cookie
app.get('/set-cookie', (request, response)=>{
    //
    response.cookie('name','atguigu', {maxAge: 3600*1000});
    response.send('cookie 设置完毕');
});

//获取 cookie
app.get('/get-cookie', (request, response)=>{
    //获取 cookie
    console.log(request.headers['cookie']);
    response.send('cookie 获取');
});

//删除 cookie
app.get('/delete-cookie', (request, response)=>{
    response.clearCookie('name','a','c','e');
    response.send('cookie 删除完毕');
});

//4. 
app.listen(8002, ()=>{
    console.log('ok');
});