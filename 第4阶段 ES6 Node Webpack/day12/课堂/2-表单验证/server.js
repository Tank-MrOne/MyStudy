/**
 * 显示 注册表单
 * GET  /sign-up
 * 
 * 提交数据 进行注册
 * POST  /sign-up
 * 
 * 检测用户名是否存在
 * GET /check-username
 *      如果检测通过, 用户名不存在, 用户名可用  0
 *      如果用户名已经存在, 不可用, 返回结果    1
 */
const express = require('express');
const users = require('./users.json');
const app = express();

//路由规则
app.get('/sign-up', (request, response)=>{
    response.sendFile(__dirname + '/register.html');
});

app.post('/sign-up', (request, response)=>{
    response.send('ok');
});

app.get('/check-username', (request, response)=>{
    //获取用户的请求数据
    let username = request.query.username;
    //判断
    if(!username) {
        response.end('1');
        return;
    }
    //检测用户名是否存在
    let flag = false;
    for(let i=0;i<users.length;i++){
        if(users[i].username === username){
            flag = true;
            break;
        }
    }
    //判断 flag  存在该用户名
    if(flag){
        response.end('1');
    }else{
        response.end('0');
    }
});

//启动服务
app.listen(8003, ()=>{
    console.log('服务已经启动.....');
})