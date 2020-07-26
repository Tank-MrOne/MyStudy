//
const express = require('express');
const app = express();

app.get('/', (request, response) => {
    response.send('网站首页!');
});

//显示 HTML 网页
app.get('/jquery-page', (request, response)=>{
    //返回 HTML 的网页
    response.sendFile(__dirname + '/client.html');
});

//接收发送的请求
app.all('/server', (request, response)=>{
    response.send('express server');
});

app.listen(8005, () => {
    console.log('服务已经启动 8005 端口监听中....');
})