//
const express = require('express');
const fs = require('fs');
const app = express();

app.get('/', (request, response) => {
    response.send('网站首页!');
});

//设置一个路由规则 返回 HTML 页面
app.get('/get-page', (request, response) => {
    fs.readFile(__dirname + '/1-GET.html', (err, data) => {
        //设置响应
        response.end(data);
    });
});

//GET 服务
app.get('/get-server', (request, response) => {
    response.send('今天风好大!!');
});

//获取客户端传来的手机号 进行短信发送
app.get('/send-message', (request, response) => {
    //获取 url 参数  request.url
    //express 框架的提取方式
    console.log(request.query.phone);
    response.send('发送成功!!');
});

//POST案例请求的页面
app.get('/post-page', (request, response) => {
    //express也可以返回一个的文件的内容
    response.sendFile(__dirname + '/2-POST.html');
});

//POST 请求的服务
app.post('/post-server', (request, response) => {
    console.log(request.headers);
    //接收请求体数据
    let body = '';
    request.on('data', chunk => {
        body += chunk;
    })
    request.on('end', () => {
        console.log(body);
        response.send('用户名可用');
    })
});

//JSON 页面
app.get('/json-page', (request, response) => {
    response.sendFile(__dirname + '/3-JSON.html');
});
//JSON 服务
app.get('/json-server', (request, response) => {
    //返回结果是JSON数据
    let data = {
        "id": 3775,
        "hitokoto": "以剑与火之力，异端之地将燃，以异端之烬，银河将得昌盛。",
        "type": "c",
        "from": "Stellaris",
        "from_who": null,
        "creator": "aziint",
        "creator_uid": 1586,
        "reviewer": 0,
        "uuid": "c36841c6-7725-40c1-bea8-5c52344be924",
        "created_at": "1533048473"
    };
    //将数据对象转为 JS 字符串
    let str = JSON.stringify(data);

    response.end(str);

});

//IE 缓存页面
app.get('/IE-page', (request, response)=>{
    response.sendFile(__dirname+'/4-IE缓存问题.html');
});

//服务
app.get('/IE-server', (request, response) => {
    //设置响应
    response.send('ok12345678');
});

app.listen(8005, () => {
    console.log('服务已经启动 8005 端口监听中....');
})