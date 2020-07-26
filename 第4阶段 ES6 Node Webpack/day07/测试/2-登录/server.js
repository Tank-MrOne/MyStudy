// const http = require('http');
// const server = http.createServer((request,response)=>{
//     response.end('ok');
// })
// server.listen(8000);
// /login
//引入 fs 模块
const fs = require('fs');
const qs = require('querystring');

require('http').createServer((request,response)=>{
    //GET  /login 的请求处理
    if(request.method.toUpperCase() === 'GET' && request.url === '/login'){
        //返回 HTML 内容 并包含表单
        fs.readFile(__dirname + '/form.html', (err, data)=>{
            response.end(data);
        });
    }else if(request.method.toUpperCase() === 'POST' && request.url === '/login'){
        //提取表单中的内容
        //1. 声明空字符串
        let body = '';
        //2. 绑定 data 事件
        request.on('data', (chunk) =>{
            console.log(chunk);
            body += chunk;
        }); 
        //3. 绑定 end 事件
        request.on('end', () =>{
            //使用 querystring 模块解析请求体数据
            let data = qs.parse(body);
            console.log(data);

            //设置响应头
            response.setHeader('content-type','text/html;charset=utf-8');
            response.end('<div style="color:red">搞定</div>');
        });
    }else{
        response.end('ok');
    }

    
}).listen(8000, function(){
    console.log('server is running....');
});