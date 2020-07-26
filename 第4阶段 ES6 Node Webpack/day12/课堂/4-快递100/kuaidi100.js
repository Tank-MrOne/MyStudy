// 接口 URL 地址
const request = require('request');
//  https://www.kuaidi100.com/query?type=zhongtong&postid=73123917441103&temp=0.9555144253313197&phone=
let url = 'https://www.kuaidi100.com/query?type=zhongtong&postid=73123917441103&temp=0.9555144253313197&phone=';
//使用 request 包向 快递 100 发送请求
// request(url, function (error, response, body) {
//     console.error('error:', error); // Print the error if one occurred
//     console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//     console.log('body:', body); // Print the HTML for the Google homepage.
// });


const options = {
    url: url,
    headers: {
        'Host': ' www.kuaidi100.com',
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.92 Safari/537.36",
        //AJAX请求独有的请求头
        "X-Requested-With": "XMLHttpRequest",
        "Referer": "https://www.kuaidi100.com/?from=openv",
        "Cookie": "csrftoken=PjHtg0DtdMLCAdz-u0KHrbIM0V02niKb9BMOrYRrmcY; __gads=ID=ce008039759efc31:T=1586920362:S=ALNI_MYrjinjI8PCtwq4D4XcFytmnJ5o-g; WWWID=WWWF9683298B4416056B4F2C4325DB49DE9; Hm_lvt_22ea01af58ba2be0fec7c11b25e88e6c=1586920364,1589358258; Hm_lpvt_22ea01af58ba2be0fec7c11b25e88e6c=1589359035"
    }
};

request(options, function (error, response, body) {
    console.log(error);
    console.log(body);
});