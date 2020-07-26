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
    //获取请求的路径   /index.html  /css/app.css
    let pathname = urlTool.parse(request.url).pathname;
    //  /index.html   =>  __dirname + '/public/index.html'
    //  /css/app.css  =>  __dirname + '/public/css/app.css'
    //  /abc.html           =>  __dirname + '/public' + /abc.html 
    //根据请求 拼接出文件的路径
    let filePath = __dirname + '/public' + pathname;
    //判断文件是否存在  existsSync 用来判断文件是否存在
    if(fs.existsSync(filePath)) {
        //读取文件内容 并返回
        fs.readFile(filePath, (err, data) => {
            //响应
            response.end(data);
        });
    }else{
        //则返回 404 状态
        //设置响应状态码
        response.statusCode = 404;
        response.end('404');
    }
 });

 //3. 启动服务监听端口
 server.listen(8000, ()=>{
    console.log('服务已经启动, 8000 端口监听中....');
 });