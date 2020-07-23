/**
 * 
 * 1. 显示 HTML 网页
 * GET  /add-address
 * 
 * 2. 返回省级信息
 * GET /get-provinces
 * 
 * 3. 返回市级信息
 * GET /get-cities
 * 
 * 4. 返回县级信息
 * GET /get-xians
 * 
 */
const express = require('express');
const data = require('./cities.json');
const app = express();

//路由规则
app.get('/add-address', (request, response)=>{
    response.sendFile(__dirname + '/city.html');
});

app.get('/get-provinces', (request, response)=>{
    //返回省份信息
    let provinces = Object.keys(data);
    //转为 JSON 字符串
    let str = JSON.stringify(provinces);
    response.send(str);
});

app.get('/get-cities', (request, response)=>{
    //获取省份的信息
    let sheng = request.query.sheng;
    //获取省份下的市级信息
    let cities = Object.keys(data[sheng]);
    //转为 字符串
    let str = JSON.stringify(cities);
    response.send(str);
});

app.get('/get-xians', (request, response)=>{
    //获取市级的信息
    let shi = request.query.shi;
    let sheng = request.query.sheng;
    //获取市级对应的县级信息
    let xian = data[sheng][shi];
    //将数组转为字符串
    let str = JSON.stringify(xian);
    //返回结果
    response.end(str);
});

app.listen(8005, ()=>{
    console.log('服务已经启动 8005 端口监听中.....');
});