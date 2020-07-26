/*
    通过 fs 模块创建下列文件结构
    project
        images
            logo.png
        css
            app.css
        js
            app.js
        index.html
 */
const fs = require('fs');

fs.mkdir(__dirname+'/project', err => {
    if(err) throw err;
    //创建 images 文件夹
    fs.mkdir(__dirname + '/project/images', err => {
        if(err) throw err;
        //创建成功 则创建 logo.png
        fs.writeFile(__dirname + '/project/images/logo.png', 'abc', err => {
            if(err) throw err;
            console.log('images 文件夹创建成功');
        })
    });
    

});