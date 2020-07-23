const http = require('http');
const ejs = require('ejs');
const fs = require('fs');

const server = http.createServer((request, response)=>{
    //数据
    let stars = [
        {id:1, name: '赵丽颖'},
        {id:2, name: '孙俪'},
        {id:3, name: '李冰冰'},
        {id:4, name: '冯提莫'},
        {id:5, name: '王菲'},
        {id:6, name: '杨超越'},
    ];
    //读取模板文件的内容
    // const html = fs.readFileSync(__dirname + '/stars.html').toString();
    //使用 ejs 与 模板进行拼接
    // let body = ejs.render(html, {stars: stars})
    
    //renderFile 的使用
    ejs.renderFile(__dirname+'/stars.html', {stars:stars}, function(err, str){
        response.end(str);
    });

   
});

server.listen(9000, ()=>{
    console.log('ok');
});