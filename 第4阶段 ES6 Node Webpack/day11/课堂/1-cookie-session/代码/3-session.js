//1. 引入 express 模块
const express = require('express');
let session = require("express-session");

//2. 创建应用对象
const app = express();

//session设置
app.use(session({
    name: 'sid',   //设置cookie的name，默认值是：connect.sid
    secret: 'atguigu', //参与加密的字符串（又称签名）
    saveUninitialized: false, //是否为每次请求都设置一个cookie用来存储session的id
    resave: true,//是否在每次请求时重新保存session
    cookie: {
        httpOnly: true, // 开启后前端无法通过 JS 操作
        maxAge: 1000 * 300 // 这一条 是控制 sessionID 的过期时间的！！！
    }
}));

//3. 创建路由规则
app.get('/', (request, response) => {
    response.send('网站首页');
});

//创建路由规则 写入session
app.get('/set-session', (request, response)=>{
    //设置 session
    request.session.name = 'ATGUIGU';
    //响应
    response.send('session 设置'); 
});

app.get('/get-session', (request, response)=>{
    //设置 session
    console.log(request.session.name);
    //响应
    response.send('session 读取');
});

//4. 服务启动
app.listen(8004, () => {
    console.log('express 服务已经启动, 8000 端口监听中....');
});