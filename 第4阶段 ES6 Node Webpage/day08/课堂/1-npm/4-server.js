//创建HTTP 服务
const http = require('http');

//2. 创建服务
const server = http.createServer((request, response) =>{

    response.end('ok');











    
});

//3. 启动服务
server.listen(8000, ()=>{
    console.log('服务已经启动>....');
});