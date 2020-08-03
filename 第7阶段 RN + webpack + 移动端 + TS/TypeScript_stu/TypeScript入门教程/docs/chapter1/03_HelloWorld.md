# 3. 第一个 TypeScript 程序

## 编写第一个 TS 程序
src/hello.ts
```typescript
function welcome (person) {
  return `hello,${person},欢迎学习TS`
}

let user = 'Tom'

console.log(welcome(user))
```

## 手动编译代码

我们使用了 `.ts` 扩展名，该文件就是一个ts文件，只不过代码是 `JavaScript` 而已。
`.ts`文件是不可以被浏览器直接运行的，需要翻译成`.js`文件

在命令行上，运行 TypeScript 编译器：

```bash
tsc hello.ts
```

输出结果为一个 `hello.js` 文件，它包含了和输入文件中相同的 JavsScript 代码。
接下来你可以在`html`文件中引入这个js让浏览器去运行它，当然你也可以在Node环境下运行：

```bash
node hello.js
```

控制台输出：

```
Hello, Tom
```

## vscode自动编译

    1). 生成配置文件tsconfig.json
        tsc --init
    2). 修改tsconfig.json配置
        "outDir": "./js",
        "strict": false,    
    3). 启动监视任务: 
        终端 -> 运行任务 -> 监视tsconfig.json

## 小试牛刀——TS中的类型注解

接下来让我们看看 TypeScript 的高级功能。 给  `person` 函数的参数添加 `: string` 类型注解，如下：

```typescript
function greeter (person: string) {
  return 'Hello, ' + person
}

let user = 'Yee'

console.log(greeter(user))
```

TypeScript 里的类型注解是一种轻量级的为函数或变量添加约束的方式。 在这个例子里，我们希望 `greeter` 函数接收一个字符串参数。 然后尝试把 `greeter` 的调用改成传入一个数组：

```typescript
function greeter (person: string) {
  return 'Hello, ' + person
}

let user = [0, 1, 2]

console.log(greeter(user))
```

重新编译，你就看到产生了一个错误，提示你缺少了参数，类似地，尝试删除 `greeter` 调用的所有参数。 TypeScript 会告诉你使用了非期望个数的参数调用了这个函数。 在这两种情况中，TypeScript提供了静态的代码分析，它可以分析代码结构和提供的类型注解。

要注意的是尽管有错误，文件还是被创建了。 就算你的代码里有错误，你仍然可以使用 TypeScript。但在这种情况下，TypeScript 会警告你代码可能不会按预期执行。

## 总结

到这里，你已经对 TypeScript 有了一个大致的印象，那么下一章让我们来一起学习 TypeScript 的一些常用语法吧。




