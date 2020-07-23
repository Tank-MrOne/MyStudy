//引入 http 模块
const http = require('http');
const urlTool = require('url');
const fs = require('fs');
const ejs = require('ejs');
const zlib = require('zlib');

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
            // /tt.com/index.html  =>  html  =>  text/html
            // /app.css  =>  css  =>  text/css
            //获取请求路径的 后缀
            let suffix = url.split('.').pop();
            //获取所有的类型
            let mimeTypes = require('./mimes/mimes.json');
            //检测
            //如果存在对应的类型
            if(mimeTypes[suffix]) {
                response.setHeader('Content-type', mimeTypes[suffix]);
            }else{
                response.setHeader('Content-type','text/plain;charset=utf-8')
            }
            
            //读取文件内容
            fs.readFile(filePath, (err, data) => {
                if (err) {
                    console.log(err);
                    //响应错误
                    return response.end('Server Internal Error')
                }

                //压缩  gzip  deflate  br
                //获取请求头信息 deflate, gzip,  br
                let encodings = request.headers['accept-encoding'];
                //检测支持的类型中是否包含 gzip 压缩
                if(encodings.indexOf('gzip') !== -1){
                    //设置响应头
                    response.setHeader('Content-Encoding', 'gzip');
                    //设置响应体
                    zlib.gzip(data, function(err, data){
                        response.end(data);
                    });
                    return;
                }else if(encodings.indexOf('deflate') !== -1){
                    //设置响应头
                    response.setHeader('Content-Encoding', 'deflate');
                    //设置响应体
                    zlib.deflate(data, function(err, data){
                        response.end(data);
                    });
                    return;
                }
                response.end(data);
            });
        }

    });





});

//启动服务
server.listen(8000, () => {
    console.log('服务已经启动, 8000 端口监听中....\r\n Ctrl + c 停止服务');
})