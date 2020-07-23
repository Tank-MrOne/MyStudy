/**
 * //创建 HTTP 服务
 GET   /index.html           将 public/index.html 文件中的内容返回给客户端
 GET   /css/app.css         将 public/css/app.css 文件中的内容返回给客户端
 GET   /css/app.js         将 public/js/app.js 文件中的内容返回给客户端
 */
 //1. 引入 HTTP 服务
 const http = require('http');
 const urlTool = require('url');
 const fs = require('fs');

 //2. 创建服务
 const server = http.createServer((request, response) => {
    //检测路径和方法                              /index.html?id=100
    if(request.method.toUpperCase() === 'GET' && urlTool.parse(request.url).pathname === '/index.html'){
        //将 public 目录下的 index.html 文件中的内容进行返回
        fs.readFile(__dirname + '/public/index.html', (err, data) => {
            if(err) throw err;
            //将数据返回给客户端浏览器
            response.end(data);
        });
    }else if(request.method.toUpperCase() === 'GET' && urlTool.parse(request.url).pathname === '/css/app.css'){
        // 对于 CSS 文件的处理
        fs.readFile(__dirname + '/public/css/app.css', (err, data) => {
            if(err) throw err;
            //将数据返回给客户端浏览器
            response.end(data);
        });
    }else if(request.method.toUpperCase() === 'GET' && urlTool.parse(request.url).pathname === '/js/app.js'){
        // 对于 CSS 文件的处理
        fs.readFile(__dirname + '/public/js/app.js', (err, data) => {
            if(err) throw err;
            //将数据返回给客户端浏览器
            response.end(data);
        });
    }else{
        response.end('ok');
    }
    
 });

 //3. 启动服务监听端口
 server.listen(8000, ()=>{
    console.log('服务已经启动, 8000 端口监听中....');
 });