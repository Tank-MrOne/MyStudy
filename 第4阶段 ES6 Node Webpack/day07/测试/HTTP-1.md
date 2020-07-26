# HTTP 测试

搭建 HTTP 服务处理请求

GET  /users  返回一个表格(table)

表格的格式

| 姓名      | 年龄 |
| --------- | ---- |
| xiaohigh  | 18   |
| zhangzhen | 20   |

数据源

```js
const arr = [
    {name: 'knight', age: 18},
    {name: 'xiaoming', age: 20},
    {name: 'xiaoning', age: 28},
    {name: 'xiaotian', age: 18},
];
```

> 样式可以不一致，但数据要动态的，通过修改数据，就能改变显示的结果