const express = require('express');

const app = express();

app.get('/page', (request, response)=>{
    //返回 5 HTML 文件
    response.sendFile(__dirname + '/5-Promise封装AJAX请求.html')
});

app.get('/server', (request, response)=>{
    //
    response.statusCode = 404;
    response.send('服务返回的广告数据');
});

app.listen(8000);