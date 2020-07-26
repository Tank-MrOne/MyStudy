/*
    通过 fs 模块创建下列文件结构
        images
        css
        js
        index.html
 */
//引入fs模块
const fs = require('fs');

//创建文件件
// fs.mkdirSync('./page');
// fs.mkdirSync('./page/images');
// fs.mkdirSync('./page/css');
// fs.mkdirSync('./page/js');
// fs.writeFileSync('./page/index.html', '');

fs.mkdir('./page-2', function (err) {
    if (err) throw err;
    console.log('page-2 文件夹创建成功');

    fs.mkdir('./page-2/images', function (err) {
        if (err) throw err;
        console.log('page-2/images 文件夹创建成功');
    });

    fs.mkdir('./page-2/css', function (err) {
        if (err) throw err;
        console.log('page-2/css 文件夹创建成功');
    });

    fs.mkdir('./page-2/js', function (err) {
        if (err) throw err;
        console.log('page-2/js 文件夹创建成功');
    });

    fs.writeFile('./page-2/index.html', '', (err) => {
        if (err) throw err;
        console.log('page-2/index.html 文件创建成功');
    });
});

