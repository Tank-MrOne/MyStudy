let ejs = require('ejs');
const fs = require('fs');
//声明数据
let people = ['geddy', 'neil', 'alex'];// => ul   li

//文件
let content = fs.readFileSync(__dirname + '/1-template.ejs').toString();
//解析
let html = ejs.render(content, { people: people ,className: 'H5BJSZ-200212'});
console.log(html);

// let className = 'H5BJ-200212';
// //进行替换 并返回替换后的结果  <%  %> 

// let html = ejs.render(`
//     <h2><%= className %></h2>
//     <ul>
//         <% for(let i=0;i<people.length;i++){ %>
//         <li><%= people[i] %></li>
//         <% } %>
//     </ul>
// `, { people: people, className: className});

// console.log(html);
