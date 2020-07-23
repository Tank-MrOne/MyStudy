// request 是一个简单版的 HTTP 客户端
const request = require('request');
const fs = require('fs');
// request('http://www.baidu.com', function (error, response, body) {
//     console.error('error:', error); // Print the error if one occurred
//     console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//     console.log('body:', body); // Print the HTML for the Google homepage.
// });

//抓取百度新闻的数据
request('http://baijiahao.baidu.com/s?id=1660031137143583204', function (error, response, body) {
    // console.log('body:', body); 
    //将请求回来的响应体数据 写入文件中
    // fs.writeFileSync('./response.txt', body);
    //
    //测试脚本
    let responseText = fs.readFileSync('./response.txt');

    //匹配标题
    let reg = /<title>(.*)<\/title>/;

    let reg2 = /<div class="article-content">(.*)<audio/;

    //正则匹配
    let title = reg.exec(responseText);
    console.log(title);return;
    let content = reg2.exec(responseText);

    let data = {
        title: title[1],
        content: content[1]
    };

    console.log(data);

});





