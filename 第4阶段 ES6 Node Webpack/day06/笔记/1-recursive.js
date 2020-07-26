const fs = require('fs');

//创建文件夹  多级文件夹
// a/b/c/d
fs.mkdir('a',{recursive : true}, function(err){
    if(err) throw err;
    console.log('创建成功');
});

fs.mkdir('b',{recursive : true}, function(err){
    if(err) throw err;
    console.log('创建成功');
});