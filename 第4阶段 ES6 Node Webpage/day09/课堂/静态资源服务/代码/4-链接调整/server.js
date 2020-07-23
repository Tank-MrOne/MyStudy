//引入 http 模块
const http = require('http');
const urlTool = require('url');
const fs = require('fs');
const ejs = require('ejs');
//创建http服务
const server = http.createServer((request, response) => {
    //获取的请求的路径
    let url = urlTool.parse(request.url, true).pathname;//    /index.html
    //服务的根目录设定
    // D:/www/share/day08/课堂/3-静态资源服务/代码/1-初始结构/public
    let root = __dirname + '/public';
    //到根目录下查找文件
    let filePath = root + url;
    let title = '文件列表内容abc';

    fs.stat(filePath, (err, stats) => {
        //判断
        if (err) {
            response.status = 404;
            response.setHeader('content-type', 'text/html;charset=utf-8');
            response.end('<h1>404 Not Found</h1>');
            return;
        }

        //判断是否为文件夹
        if (stats.isDirectory()) {
            //读取文件夹中的文件内容
            fs.readdir(filePath, (err, files)=>{
                // console.log(data); // [ 'app.css', 'home.css' ]
                response.setHeader('content-type','text/html;charset=utf-8');
                //使用 ejs 来处理
                ejs.renderFile(__dirname + '/views/directory.html', {files: files, pathname: url, title:title}, (err, str)=>{
                    //判断 如果出现错误
                    if(err) {
                        response.statusCode = 500;
                        response.end("<h1>Server Internal Error</h1>");
                        return;
                    }
                    //响应结果
                    response.end(str);
                });
                
            });
        } else {
            //读取文件内容
            fs.readFile(filePath, (err, data) => {
                if (err) {
                    console.log(err);
                    //响应错误
                    return response.end('Server Internal Error')
                }
                response.end(data);
            })
        }

    });





});

//启动服务
server.listen(8000, () => {
    console.log('服务已经启动, 8000 端口监听中....\r\n Ctrl + c 停止服务');
})