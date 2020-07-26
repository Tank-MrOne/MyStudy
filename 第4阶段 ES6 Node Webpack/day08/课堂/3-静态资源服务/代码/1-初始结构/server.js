//引入 http 模块
const http = require('http');
const urlTool = require('url');
const fs = require('fs');

//创建http服务
const server = http.createServer((request, response) => {
    //获取的请求的路径
    let url = urlTool.parse(request.url, true).pathname;//    /index.html
    //服务的根目录设定
    // D:/www/share/day08/课堂/3-静态资源服务/代码/1-初始结构/public
    let root = __dirname + '/public';
    //到根目录下查找文件
    let filePath = root + url; 
    
    //读取文件内容
    fs.readFile(filePath, (err, data) => {
        if(err){
            console.log(err);
            //响应错误
            return response.end('Server Internal Error')
        }
        response.end(data);
    });

});

//启动服务
server.listen(8000, ()=>{
    console.log('服务已经启动, 8000 端口监听中....\r\n Ctrl + c 停止服务');
})