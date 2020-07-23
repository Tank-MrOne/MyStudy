// 这个是 gulp 的配置文件

//引入 gulp 包
const gulp = require("gulp");
const fs = require("fs");
const jshint = require('gulp-jshint');
//引入 babel 插件
const babel = require('gulp-babel');
//browserify 打包插件
const browserify = require('gulp-browserify');
// rename 重命名插件
const rename = require('gulp-rename');
// JS 文件的压缩  uglify
const uglify = require('gulp-uglify');
// Less 文件解析
const less = require('gulp-less');
const LessAutoprefix = require('less-plugin-autoprefix');
//自动添加样式前缀
const autoprefix = new LessAutoprefix({ browsers: ['last 20 versions'] });
//css 文件的合并
const concat = require('gulp-concat');//
//css 文件的合并
const cssmin = require('gulp-cssmin');
//引入 HTML 压缩插件
const htmlmin = require('gulp-htmlmin');
//实现热更新
const livereload = require('gulp-livereload');
//创建静态资源服务
const connect = require('gulp-connect');
//自动打开浏览器
const opn = require('opn');

//jshint 语法检查
gulp.task('jshint', function () {
    // 将你的任务的任务代码放在这  src 指定文件源   * 代表通配符
    return gulp.src('./src/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(livereload());
});

//语法转化
gulp.task('babel', () => {
    return gulp.src('./src/js/*.js')
        .pipe(babel({ //进行语法转换  lastest
            presets: ['@babel/env']
        })).pipe(gulp.dest('build/js'))//输出到指定目录  dest 目的地
        .pipe(livereload());
});

//打包
gulp.task('browserify', function () {
    return gulp.src('./build/js/app.js')
        .pipe(browserify())					//将CommonJs语法转换为浏览器能识别的语法
        .pipe(rename('built.js'))			//为了防止冲突将文件重命名
        .pipe(gulp.dest('build/js'))		//输出到指定位置
        .pipe(livereload());
});

//默认任务  series
// gulp.task('default', gulp.series('jshint', 'babel', 'browserify'));

//JS 压缩任务
gulp.task('uglify', function () {
    return gulp.src('build/js/built.js')
        .pipe(uglify())  //压缩js
        .pipe(rename('dist.min.js')) // dist 一般用来放置最终的代码
        .pipe(gulp.dest('dist/js'))
        .pipe(livereload());
});

//解析 less 文件
gulp.task('less', function () {
    return gulp.src('./src/css/*.less')
        .pipe(less({
            plugins: [autoprefix] //自动扩展前缀
        }))
        .pipe(gulp.dest('./build/css'))
        .pipe(livereload());
});

//CSS 合并任务
gulp.task('concat', function () {
    return gulp.src('./build/css/*.css')
        .pipe(concat('built.css'))
        .pipe(gulp.dest('./build/css/concat'))
        .pipe(livereload());
});

//css 压缩
gulp.task('cssmin', function () {
    return gulp.src('build/css/concat/built.css')
        .pipe(cssmin())
        .pipe(rename('dist.min.css'))
        .pipe(gulp.dest('dist/css'))
        .pipe(livereload());
});

//HTML 文件处理
gulp.task('htmlmin', () => {
    return gulp.src('src/index.html')
        .pipe(htmlmin({
            collapseWhitespace: true,//去除空格
            removeComments: true //去除注释
        }))
        .pipe(gulp.dest('dist'))
        .pipe(livereload());
});

//创建任务 监听文件变化并更新网页
gulp.task('watch', function () {
    //2. 启动热加载服务
    livereload.listen();
    //3. 通过自己服务器打开项目，自动刷新
    connect.server({
        root: 'dist',
        port: 8000,
        livereload: true  // 自动刷新
    });
    //3. 自动打开浏览器
    opn('http://localhost:8000/index.html');
    //4. 监视指定文件（第一个参数），一旦文件发生变化，就自动执行后面的任务（第二个参数）
    gulp.watch('src/css/*.less', gulp.series(['less', 'concat', 'cssmin']));
    gulp.watch('./src/js/*.js', gulp.series(['jshint', 'babel', 'browserify', 'uglify']));
    gulp.watch('./src/index.html', gulp.series('htmlmin'));
});


//运行命令的注意事项
//1. 如果是全局安装, 可以直接运行 gulp 命令
//2. 如果是局部安装, 可以运行 npx gulp 命令

// gulp.task("default", async function (cb) {
//     console.log("hello gulp");
//     // return fs.createReadStream("./package.json");
//     // cb();
// });
