const express = require('express');

const app = express();


app.get('/', (request, response) => {
  console.log('1111');
  response.end('success data');
});


app.get('/login', (request, response) => {
  console.log('2222');
  response.end('login data');
});

app.post('/register', (request, response) => {
  console.log('3333');
  response.end('register data');
});


app.listen('3001', (err) => {
  if(err){
    console.log('服务器启动错误');
  }else {
    console.log('服务器启动成功');
    console.log('服务器地址： http://localhost:3001');
  }
})

