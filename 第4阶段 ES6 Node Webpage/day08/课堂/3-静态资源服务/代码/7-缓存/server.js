//1. 引入 http 模块
const http = require('http');
//引入 url 模块
const urlTool = require('url');
//引入 path 模块
const path = require('path');
//引入 fs 模块
const fs = require('fs');
//引入 ejs
const ejs = require('ejs');
//引入 mimes 对象  引入 json 文件不是读取文件
const mimes = require('./mimes/mimes');
//引入 zlib 模块
const zlib = require('zlib');
//引入 etag 模块
var etag = require('etag');

//2. 创建服务
const server = http.createServer((request, response) => {
    //获取请求的路径  /index.html?id=100
    let url = urlTool.parse(request.url).pathname;
    //拼接文件的路径
    let filePath = path.resolve(__dirname, 'public' + url);
    //检测路径对应资源的类型
    fs.stat(filePath, (err, stats) => {
        //判断
        if (err) {
            response.statusCode = 404;
            response.end('<h1>404 Not Found</h1>');
            return;
        }
        //检测是否为文件夹
        if (stats.isDirectory()) {
            //读取文件夹中的内容
            fs.readdir(filePath, (err, data) => {
                //如果出错
                if (err) {
                    //如果出现错误 返回 500  服务器内部错误
                    response.statusCode = 500;
                    response.end('<h1>500 Internal Error</h1>');
                    return;
                }
                //设置响应头
                response.setHeader('content-type', 'text/html;charset=utf-8');
                //如果没有出错  data  ['app.css','home.css']
                let templateFilePath = path.resolve(__dirname, 'views/directory.html');
                //解析模板显示文件列表页面
                ejs.renderFile(templateFilePath, {data: data, url: url}, (err, data) => {
                    //判断解析是否有误
                    if (err) {
                        //如果出现错误 返回 500  服务器内部错误
                        response.statusCode = 500;
                        response.end('<h1>500 Internal Error</h1>');
                        return;
                    }
                    //如果没有错误  将解析完成的内容 返回给客户端
                    response.end(data);
                });
            });
        }
        else {
            //检测客户端请求的 if-none-match  if-modified-since
            let requestEtag = request.headers['if-none-match'];
            let requestLastModified = request.headers['if-modified-since'];
            //重新计算当前文件的 etag 值
            let currentFileEtag = etag(stats);
            let currentFileModifiedTime = stats.mtime.toUTCString();
            //判断
            if(requestEtag === currentFileEtag || requestLastModified === currentFileModifiedTime){
                //响应 304
                response.statusCode = 304;
                response.end();
                return;
            }

            //如果是文件的情况  substr  substring
            //获取文件的后缀  url   /index.html  =>  html
            // css  =>  text/css
            const suffix = url.split('.').pop();
            //判断mimes是否存在 文件对应的 mime 类型
            if (mimes[suffix] === undefined) {
                response.setHeader('content-type', 'text/plain; charset=utf-8');
            } else {
                response.setHeader('content-type', mimes[suffix]);
            }

            //设置强制缓存
            response.setHeader('cache-control','max-age=300');

            //设置 etag
            let etagValue = etag(stats);
            response.setHeader('Etag', etagValue);
            response.setHeader('last-modified', stats.mtime.toUTCString())

            //读取文件内容
            fs.readFile(filePath, (err, data) => {
                if (err) {
                    //如果出错
                    response.statusCode = 500;
                    response.end('<h1>Interval server Error</h1>')
                    return;
                }
                //判断支持的压缩方式
                let encoding = request.headers['accept-encoding'];// undefined
                // console.log(encoding); //gzip, deflate, br
                //判断如果没有指定 encoding
                if(encoding === undefined){
                    response.end(data);
                    return;
                }
                //判断encoding 中是否有 gzip
                if (encoding.indexOf('gzip') !== -1) {
                    //设置响应头
                    response.setHeader('content-encoding', 'gzip');
                    //对响应体的数据进行压缩
                    zlib.gzip(data, (err, result) => {
                        if (err) {
                            //如果出错
                            response.statusCode = 500;
                            response.end('<h1>Interval server Error</h1>')
                            return;
                        }
                        response.end(result);
                    });
                }
                //判断encoding 中是否有 deflate
                else if(encoding.indexOf('deflate') !== -1) {
                    //设置响应头
                    response.setHeader('content-encoding', 'deflate');
                    //对响应体的数据进行压缩
                    zlib.deflate(data, (err, result) => {
                        if (err) {
                            //如果出错
                            response.statusCode = 500;
                            response.end('<h1>Interval server Error</h1>')
                            return;
                        }
                        response.end(result);
                    });
                }
                //判断encoding 中是否有 br
                else if (encoding.indexOf('br') !== -1) {
                    //设置响应头
                    response.setHeader('content-encoding', 'br');
                    //对响应体的数据进行压缩
                    zlib.brotliCompress(data, (err, result) => {
                        if (err) {
                            //如果出错
                            response.statusCode = 500;
                            response.end('<h1>Interval server Error</h1>')
                            return;
                        }
                        response.end(result);
                    });
                }
            });
        }
    });


});

//3. 启动服务 监听端口
server.listen(8000, () => {
    console.log('服务已经启动， 端口 8000 监听中.....');
});