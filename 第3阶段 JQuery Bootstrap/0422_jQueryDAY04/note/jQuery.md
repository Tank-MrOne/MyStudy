# jQuery

## 一、jQuery的产生

- 它的作者是 John Resig ,于2006年创建的一个开源项目

![](https://tva1.sinaimg.cn/large/007S8ZIlgy1gdx5nyyghzj308m02n0sm.jpg)

- jQuery 是一个 JavaScript 库，它通过封装原生的 JavaScript 函数得到一整套定义好的方法

<img src="https://tva1.sinaimg.cn/large/007S8ZIlgy1gdx5oivarnj319a0gkt8x.jpg" style="zoom:33%;" />

- jQuery 已经集成了 JavaScript 、 CSS 、 DOM 和 Ajax 于一体的强大功能 。

![](https://tva1.sinaimg.cn/large/007S8ZIlgy1gdx5p4y2smj30di04hwef.jpg)

## 二、jQuery的功能和优势

- 像 CSS 那样访问和操作 DOM

- 修改 CSS 控制页面外观 

- 简化 JavaScript 代码操作

- 事件处理更加容易

- 各种动画效果使用方便

- 让 Ajax 技术更加完美

- 基于 jQuery 大量插件

- 自行扩展功能插件

## 三、jQuery历史

- 从 2005 年 8 月开始,进入公共开发阶段,随之而来的新框架于 2006 年 1 月 14 正式以 jQuery 的名称发布。

  | **时间**     | **版本**     | **更新**                                                     |
  | ------------ | ------------ | ------------------------------------------------------------ |
  | 2006 年 8 月 | jQuery 1.0   | 第一个稳定版本，具有对 CSS 选择符、事件处理和 Ajax 交互的支持 |
  | 2007 年 1 月 | jQuery 1.1   | 极大的简化 API。合并了许多较少使用的方法                     |
  | 2007 年 7 月 | jQuery 1.1.3 | 优化了 jQuery 选择符引擎执行的速度                           |
  | 2007 年 9 月 | jQuery 1.2   | 去掉了 XPath 选择器,新增了命名空间事件                       |

  | **时间**     | **版本**     | **更新**                                                     |
  | ------------ | ------------ | ------------------------------------------------------------ |
  | 2009 年 1 月 | jQuery 1.3   | 使用了全新的选择符引擎 Sizzle,性能进一步提升                 |
  | 2010 年 1 月 | jQuery 1.4   | 进行了一次大规模更新,提供了 DOM 操作,增加了很 多新的方法或是增强了原有的方法 |
  | 2010 年 2 月 | jQuery 1.4.2 | 添加了.delegate()和.undelegate()两个新方法,提升 了灵活性和浏览器一致性,对事件系统进行了升级 |
  | 2011 年 1 月 | jQuery 1.5   | 重写了 AJAX 组件,增强了扩展性和性能                          |
  | 2011 年 5 月 | jQuery 1.6   | 重写了 Attribute 组件,引入了新对象和方法                     |
  
  | **时间**      | **版本**     | **更新**                                                     |
  | ------------- | ------------ | ------------------------------------------------------------ |
  | 2011 年 11 月 | jQuery 1.7   | 引入了.on()和.off()简介的 API 解决事件绑定及委托容   易混淆的问题 |
  | 2012 年 3 月  | jQuery 1.7.2 | 进行一些优化和升级                                           |
  | 2012 年 7 月  | jQuery 1.8   | 重写了选择符引擎,修复了一些问题                              |
  | 2013 年 1 月  | jQuery 1.9   | CSS 的多属性设置,增强了 CSS3                                 |
  | 2013 年 5月   | jQuery 1.10  | 一增加了一些功能                                             |
  
- 2013 年 4 月发布了 jQuery 2.0,5 月发布了 jQuery 2.0.2,一个重大更新版本,不在支持 IE6/7/8,体积更小,速度更快 

  ![](https://tva1.sinaimg.cn/large/007S8ZIlgy1gdx78906u3j30la07s0sx.jpg)

​		

- jQuery3版本的改动：
  - 移除旧的IE工作区
  - jQuery 3.0运行在Strict Mode下
  - 引进for...of循环
  - 动画方面采用新的API
  - 延迟对象现在与JS Promises兼容
  - 。。。



## 四、jQuery和其他类库

•**YUI**:一套完备的、扩展性良好的富交互网页工具集 

•**Prototype**:是最早成型的 JavaScript 库之一,对JavaScript 内置对象做了大量的扩展 

•**Dojo**:提供其他库没有的功能。离线存储、图标组件等等 

•**Mootools**:轻量的模块化和面向对象的 JavaScript 框架

•**ExtJs**：主要创建前端用户界面 

![](https://tva1.sinaimg.cn/large/007S8ZIlgy1gdx71y9wmxj311i0pldh5.jpg)



![image-20200417234821489](/Users/lipeihua/Library/Application Support/typora-user-images/image-20200417234821489.png)

## 五、jQuery的使用

### 5.1 jQuery 下载

- http://jquery.com/download/ 

- http://www.jq22.com/jquery-info122

### 5.2 jQuery的使用

<img src="https://tva1.sinaimg.cn/large/007S8ZIlgy1gdx77xbr0hj315s0gwq3o.jpg" style="zoom:25%;" />

## 六、jQuery对象模型

### 6.1 jQuery执行时机

|          | **window.onload**                                        | **$(document).ready()**                               |
| -------- | -------------------------------------------------------- | ----------------------------------------------------- |
| 执行时机 | 必须等待网页全部加载完毕(包括 图片等),然后再执行包裹代码 | 只需要等待网页中的DOM结构 加载完毕,就能执行包裹的代码 |
| 执行次数 | 只能执行一次,如果第二次,那么 第一次的执行会被覆盖        | 可以执行多次,第N次都不会被上 一次覆盖                 |
| 简写方案 | 无                                                       | $(function () { });                                   |

### 6.2 代码风格

- jQuery 程序中,不管是页面元素的选择、内置的功能函数,都是美元符号“$”来起始的。

![](https://tva1.sinaimg.cn/large/007S8ZIlgy1gdx7atdyr4j30cm04rgln.jpg)

- jQuery类库定义了一个全局函数：`jQuery()`。该函数使用频繁，因此在类库中还给它定义了一个快捷别名：`$`。这是jQuery在全局命名空间中定义的唯一两个变量。

![](https://tva1.sinaimg.cn/large/007S8ZIlgy1gdx7ce144qj30eo04tq31.jpg)

- css() 这个功能函数返回的对象其实也就是 jQuery 对象， jQuery 的代码模式是采用的连缀方式,可以不停的连续调用功能函数 

  ![](https://tva1.sinaimg.cn/large/007S8ZIlgy1gdx7cxq9lcj30fy00qmx0.jpg)

### 6.3 jQuery对象和JS对象

#### 6.3.1 什么是JS对象

DOM对象，即是我们用传统的方法(javascript)获得的对象。

#### 6.3.2 什么是jQuery对象

jQuery对象即是用jQuery类库的选择器获得的对象，jQuery对象就是通过jQuery包装DOM对象后产生的对象，它是jQuery独有的。如果一个对象是jQuery对象，那么就可以使用jQuery里的方法

#### 6.3.3 jQuery对象和DOM对象的互相转换

- jquery对象和dom对象是不一样的！比如jquery对象不能使用dom的方法，dom对象不能使用jquery方法，
- jquery对象转换成 dom对象：即[index]和get(index)。jquery对象就是一个类数组对象
- dom对象转换成jquery对象：对于一个dom对象，只需要用`$()`把dom对象包装起来，就可以获得一个jquery对象了，方法为$(dom对象);



## 七、jQuery类数组操作

### 7.1 什么是类数组

- 只包含使用从零开始，且自然递增的整数做键名，并且定义了length表示元素个数的对象，我们就认为他是类数组对象。 

  ![](https://tva1.sinaimg.cn/large/007S8ZIlgy1gdx7kvzlaoj30gi02xt8r.jpg)

### 7.2 类数组操作

- children() ：返回原始包装集元素的所有不同子元素所组成的新包装集,如果指定了参数，那么该参数也是筛选表达式

- parent() ：返回原始包装集所有元素的唯一直接父元素的新包装集；如果指定了参数，那么该参数也是筛选表达式

- siblings() ：返回原始包装集元素中的所有兄弟元素所组成的新包装集；如果指定了参数，那么该参数也是筛选表达式

- find(String) ：返回原始包装集里与传入的选择器表达式相匹配的所有元素的新包装集，并且原始包装集中的元素的后代也会被传入新的包装集
- 对于类数组的常用方法还有很多，比如 prev()、 end()、 next()等等。



## 八、jQuery选择器

jQuery 选择器是 jQuery 库中非常重要的部分之一。它支持网页开发者所熟知的CSS 语法，快速轻松地对页面进行设置

![](https://tva1.sinaimg.cn/large/007S8ZIlgy1gdx7n6l540j31cy0h4aa4.jpg)

### 8.1 jQuery 基础选择器

- 简化代码的编写

- 隐式迭代

  | **选择器**                           | **描述**                                    | **返回** | **示例**                                                     |
  | ------------------------------------ | ------------------------------------------- | -------- | ------------------------------------------------------------ |
  | #id                                  | 根据给定的id匹配一个元素                    | 单个元素 | $("#test")选取  id 为 test  的元素                           |
  | .class                               | 根据给定的类名匹配元素                      | 集合元素 | $(".test")选取所有  class 为  test 的元素                    |
  | element                              | 根据给定的元素名匹配元素                    | 集合元素 | $("p")选取所有的  <p> 元素                                   |
  | *                                    | 匹配所有元素                                | 集合元素 | $("*")选取所有的元素                                         |
  | selector1,selector2,   ...,selectorN | 将每一个选择器匹配到的元   素合并后一起返回 | 集合元素 | $("div,span,.myClass")选取所有<div>，<span>和拥有class为myClass  的标签的一组元素 |


### 8.2 jQuery 层次选择器

如果想通过 DOM 元素之间的层次关系来获取特定的元素，例如后代元素，子元素，相邻元素和兄弟元素等，那么层次选择器是一个非常好的选择。

​	

| **选择器**                | **描述**                                        | **返回** | **示例**                                                     |
| ------------------------- | ----------------------------------------------- | -------- | ------------------------------------------------------------ |
| $("ancestor  descendant") | 选取 ancestor  元素里所有descendant  (后代)元素 | 集合元素 | $(“div span”)选取  <div>  里的所  有的 <span>  元素          |
| $("parent>child")         | 选取 parent  元素下的child (子)元素             | 集合元素 | $(“div>span”)选取 <div>  元素下  元素名是  <span>  的子元素  |
| $("prev+next")            | 选取紧接在  prev  元素后的 next 元素            | 集合元素 | $(“.one+div”)选取  class 为 one  的下一个 、 <div> 兄弟元素  |
| $("prev~siblings")        | 选取prev元素之后的所有siblings元素              | 集合元素 | $(“#two~div”)选取  id  为 two  的元素后面所有 <div> 兄弟元素 |



### 8.3 过滤选择器

| **选择器**                            | **描述**                                                     | **返回**     | **示例**                                                     |
| ------------------------------------- | ------------------------------------------------------------ | ------------ | ------------------------------------------------------------ |
| :first                                | 选取第1个元素                                                | 单个元素     | $(“div:first”)选取所有  <div> 元素   中第一个  <div>  元素   |
| :last                                 | 选取最后1个元素                                              | 单个元素     | $(“div:last”)选取所有  <div>  元素   中最后一个 <div>  元素  |
| :not(selector)                        | 去除所有与给定选择器   匹配的元素                            | 集合元素     | $(“input:not(.myClass)”)选取  class  不是 myClass  的 <input>  元素 |
| :even                                 | 选取索引(从0开始)是偶数的所有元素                            | 集合元素     | $("input:even")选取索引是偶数的   <input>元素                |
| :odd                                  | 选取索引(从0开始)是奇数的所有元素                            | 集合元素     | $(“input:odd”)选取索引是奇数的  <input>  元素                |
| :eq(index)                            | 选取索引(从0开始)等于   index  的元素                        | 单个元素     | $(“input:eq(1)”)选取索引等于1的  <input>  元素               |
| :gt(index)                            | 选取索引(从0开始)大于   index的元素                          | 集合元素     | $(“input:gt(1)”)选取索引大于1的    <input>  元素             |
| :lt(index)                            | 选取索引(从0开始)小于   index的元素                          | 集合元素     | $(“input:lt(1)”)选取索引小于1的    <input>  元素             |
| :header                               | 选取所有的标题元素，即<h1>到<h6>                             | 集合元素     | $(":header")选取页面中所有的标题元素                         |
| :contains(text)                       | 选取含有文本内容为 text  的元素                              | 集合元素     | $("div:contains('test')")选取含有文本内容为  test 的<div>元素 |
| :empty                                | 选取不包含子元素或文本的空元素                               | 集合元素     | $(“div:empty”)选取不包含子元素或文本的空  <div>  元素        |
| :has(selector)                        | 选取含有给定选择器   匹配的元素的元素                        | 集合元素     | $(“div:has(.myClass)”)选取含有  class 为 myClass  的元素的 <div>  元素 |
| :parent                               | 选取含有子元素或文本的元素                                   | 集合元素     | $(“div:parent”)选取含有子元素或文本的  <div>  元素           |
| :first-child                          | 选取第1个子元素                                              | 集合元素     | $(“div :first-child”)选取每个  <div>下第一个子元素           |
| :last-child                           | 选取最后1个子元素                                            | 集合元素     | $(“div :last-child”)选取每个  <div>  下最后一个子元素        |
| :only-child                           | 选取只有唯一子元素的元素的子元素                             | 集合元素     | $(“div :only-child”)选择只有一个子元素的  <div>  元素        |
| :nth-child(index/  even/odd/equation) | 选取每个父元素下的第index(索引值为奇数/ 索引值为偶数/索引值等于某个表达式)个子元素，index 从1开始 | **集合元素** | $(“div:nth-child(1)”)选取每个div **中第一个子元素**          |

### 8.4  属性过滤选择器

| **选择器**                           | **描述**                            | **返回** | **示例**                                                     |
| ------------------------------------ | ----------------------------------- | -------- | ------------------------------------------------------------ |
| [attribute]                          | 选取拥有此属性的元素                | 集合元素 | $(“div[id]”)选取拥有属性  id  的元素                         |
| [attribute=value]                    | 选取属性的值为value的元素           | 集合元素 | $(“div[title=test]”)选取属性 title   为 test  的<div>元素    |
| [attribute!=value]                   | 选取属性的值不等于value的元素       | 集合元素 | $(“div[title!=test]”)选取属性 title   不等于 test 的<div>元素 |
| [attribute^=value]                   | 选取属性的值以value开始的元素       | 集合元素 | $(“div[title^=test]”)选取属性 title   以 test  开始的<div>元素 |
| [attribute$=value]                   | 选取属性的值以 value结束的元素      | 集合元素 | $(“div[title$=test]”)选取属性 title 以  test 结束的 <div>  元素 |
| [attribute*=value]                   | 选取属性的值含有 value  的元素      | 集合元素 | $(“div[title*=test]”)选取属性 title  含有 test 的 <div>  元素 |
| [selector1][selector2]...[selectorN] | 选取匹配以上所有属性   选择器的元素 | 集合元素 | $(“div[id][title*=test]”)选取拥有属性  id ，且属性  title 含有 test 的<div> 元素 |

### 8.5 jQuery 表单选择器

- 表单选择器是为了能更加容易地操作表单，表单选择器是根据元素类型来定义的

| **选择器** | **描述**                                                     | **返回** | **示例**                                                     |
| ---------- | ------------------------------------------------------------ | -------- | ------------------------------------------------------------ |
| :enabled   | 选取所有可用元素                                             | 集合元素 | $(“input:enabled")选取页面内所有可用元素                     |
| :disabled  | 选取所有不可用元素                                           | 集合元素 | $(“input:disabled")选取页面内所有不可用元素                  |
| :checked   | 选取所有被选中的元素(单选框、复选框)                         | 集合元素 | $(“input:checked”)选取所有被选中的  <input>  元素            |
| :selected  | 选取所有被选中的选项元素(下拉列表)                           | 集合元素 | $("select option:selected")选取所有被选中的选项元素          |
| :input     | 选取所有的  <input>、  <textarea>、  <select>和  <button>元素 | 集合元素 | $(":input")选取所有的<input>、<textarea>、<select>和<button>元素 |
| :text      | 选取所有的单行文本框                                         | 集合元素 | $(":text")选取所有的单行文本框                               |
| :password  | 选取所有的密码框                                             | 集合元素 | $(":password")选取所有的密码框                               |
| :radio     | 选取所有的单选框                                             | 集合元素 | $(":radio")选取所有的单选框                                  |
| :checkbox  | 选取所有的多选框                                             | 集合元素 | $(":checkbox")选取所有的多选框                               |
| :submit    | 选取所有的提交按钮                                           | 集合元素 | $(":submit")选取所有的提交按钮                               |



## 九、jQuery动画

### 9.1 jQuery 的显示和隐藏

- jQuery 中显示方法为 .show(), 隐藏方法为 .hide() 。在无参数的时候,只是硬性的显示内容和隐藏内容

- 在 .show() 和 .hide() 方法可以传递一个参数,这个参数以毫秒(1000 毫秒等于 1 秒钟)来控 制速度。并且里面富含了匀速变大变小,以及透明度变换

- 除了直接使用毫秒来控制速度外, jQuery 还提供了三种预设速度参数字符串: slow 、normal 和 fast ,分别对应 600 毫秒、400 毫秒和 200 毫秒，不管是传递毫秒数还是传递预设字符串,如果不小心传递错误或者传递空字符串。 那么它将采用默认值:400 毫秒

- 如果需要控制动画的形式，则可以有第二个参数easing。默认有两个效果："linear"和"swing"。

  其中swing（随着动画的开始变得更加快一些，然后再慢下来。swing是一个常用设置，因此，如果没有指定任何缓动，jQuery会使用swing方法）

- 使用第三个参数可以书写回调函数
- jQuery 提供给我们一个显示隐藏独立的方法 .toggle()

### 9.2 jQuery的滑动和卷动

- jQuery 提供了一组改变元素高度的方法 .slideUp() 、 .slideDown() 和 .slideToggle() 。顾名思义,向上收缩(卷动)和向下展开(滑动)。 
- 参数参考show和hide方法

### 9.3 jQuery的淡入和淡出

- jQuery 提供了一组改变元素透明度的方法 .fadeIn() 、 .fadeOut() 和 .fadeToggle() 。
- 参数参考show和hide方法

### 9.4 jQuery自定义动画

#### 9.4.1 自定义动画的基础使用

- 在jQuery中，可以使用`animate()`方法来自定义动画，满足更多复杂多变的要求 

- `animate()`的语法结构为：`animate(params,speed,callback)`
  
  - `params`：一个包含样式属性及值的映射速度
  - `speed`：参数，可选
- `callback`：在动画完成时执行的函数
  
- 累加、累减动画：可以在设置属性的时候，给属性的值为+= 或者 -= 实现累加累减动画

  例如：`left:"+=500px"`

#### 9.4.2 动画队列

- 如果想要按照顺序执行动画，只需要把代码按照顺序就可以，
- 因为`animate()`方法都是对同一个jQuery对象进行操作，所以也可以改为链式写法
- 动画效果的执行具有先后顺序，称为"动画队列"
- 但是除了动画以外，其他的方法不会放到队列中，而是直接执行

### 9.5 停止动画

#### 9.5.1 停止动画

- 很多时候需要停止匹配元素正在进行的动画，如果需要在某处停止动画，需要`stop()`方法
- `stop()`方法的语法结构为：`stop([clearQueue],[gotoEnd])`，参数`clearQueue`和`gotoEnd`都是可选的参数，为`Boolean`值（`true`或`false`）
  - `clearQueue`代表是否要清空未执行完的动画队列
  - `gotoEnd`代表是否直接将正在执行的动画跳转到末状态
- `stop()`方法会结束当前正在进行的动画，并立即执行队列中的下一个动画

#### 9.5.2 判断元素是否处于动画状态

- 当用户在某个元素上执行`animate()`动画时，就会出现动画积累
- 使用`is(":animated")`方法判断是否处于动画状态

- 解决办法是判断元素是否正在处于动画状态，如果元素不处于动画状态，才会为元素添加新动画

#### 9.5.3 延迟动画

- 在动画执行过程，如果想对动画进行延迟操作，那么可以使用方法
- `delay()`方法允许我们将队列中的函数延迟执行。它既可以推迟动画队列中函数的执行，也可以用于自定义队列



## 十、元素的样式操作

- 元素样式操作包括了直接设置 CSS 样式、增加 CSS 类别、类别切换、删除类别这几种操作方法。
- 还有内外边距和边框尺寸方法 
- 还有位置相关的方法

| 方法名                                | **描述**                                            |
| ------------------------------------- | --------------------------------------------------- |
| css(name)                             | 获取某个元素的 CSS 样式                             |
| css(name, value)                      | 设置某个元素行内的 CSS 样式                         |
| css({name1 : value1, name2 : value2}) | 设置某个元素行内多个 CSS 样式                       |
| addClass(class)                       | 给某个元素添加一个 CSS 类                           |
| removeClass(class)                    | 删除某个元素的一个 CSS 类                           |
| toggleClass(class)                    | 来回切换默认样式和指定样式                          |
| width()                               | 获取某个元素的长度                                  |
| width(value)                          | 设置某个元素的长度                                  |
| height()                              | 获取某个元素的长度                                  |
| height(value)                         | 设置某个元素的长度                                  |
| innerWidth() /innerHeight()           | 获取元素宽度 / 高度,包含内边距 padding              |
| outerWidth() /outerHeight()           | 获取元素宽度／高度,包含边框 border 和内边距 padding |
| outerWidth(ture) /outerHeight(true)   | 同上,且包含外边距                                   |
| offset()                              | 获取某个元素相对于视口的偏移位置                    |
| position()                            | 获取某个元素相对于父元素的偏移位置                  |
| scrollTop() / scrollTop(value)        | 获取/设置垂直滚动条的值                             |
| scrollLeft() / scrollTop(value)       | 获取/设置水平滚动条的值                             |



## 十一、jQuery的DOM操作

### 12.1 设置内容及属性

| **方法名**                               | **描述**                          |
| ---------------------------------------- | --------------------------------- |
| html()                                   | 获取元素中 HTML 内容              |
| html(value)                              | 设置元素中 HTML 内容              |
| text()                                   | 获取元素中文本内容                |
| text(value)                              | 设置元素中文本内容                |
| val()                                    | 获取表单中的文本内容              |
| val(value)                               | 设置表单中的文本内容              |
| prop/attr(key)                           | 获取某个元素 key 属性的属性值     |
| prop/attr(key, value)                    | 设置某个元素 key 属性的属性值     |
| prop/attr({key1:value2, key2:value2...}) | 设置某个元素多个 key 属性的属性值 |
| removeattr(key)                          | 删除指定的属性                    |

### 12.2 DOM 操作

#### 12.2.1 创建节点

- 运用传统的 JavaScript 方法，创建一个 div 元素节点：`createElement()`
- jQuery 中创建一个 div 元素节点 `$("<div></div>")`;

#### 12.2.2 创建文本节点

- 运用传统的 JavaScript 方法，创建div的文本节点`createTextNode()`;
- jQuery 中创建一个 div 元素节点 `$("<div>新创建文本</div>")`

#### 12.2.3 创建属性节点

- 运用传统的 JavaScript 方法，创建div的属性节点，我们可以使用setAttribute(name,value)
- jQuery 中创建div 的属性节点可以使用 attr( )方法，也可以直接写在创建的 div 中

#### 12.2.4 插入节点

| **方法名**            | **描述**                                  |
| --------------------- | ----------------------------------------- |
| append(content)       | 向指定元素内部后面插入节点 content        |
| appendTo(content)     | 将指定元素移入到指定元素 content 内部后面 |
| prepend(content)      | 向指定元素 content 内部的前面插入节点     |
| prependTo(content)    | 将指定元素移入到指定元素 content 内部前面 |
| after(content)        | 向指定元素的外部后面插入节点 content      |
| insertAfter(content)  | 将指定节点移到指定元素 content 外部的后面 |
| before(content)       | 向指定元素的外部前面插入节点 content      |
| insertBefore(content) | 将指定节点移到指定元素 content 外部的前面 |

#### 12.2.5 删除节点

- 运用传统的JS方法，使用`removeChild`来删除一个节点

- 删除节点 remove() 不带参数时,删除前面对象选择器指定的元素。

  - 而 remove() 本身也可以带选择符参数的

  - 清空节点 empty() 是用来删除掉节点里的内容

#### 12.2.6 替换节点

- 运用传统的JS方法，使用`replaceChild`来替换节点
- jQuery 中使用 replaceAll 的方法替换节点,节点被替换后,所包含的事件行为就全部消失了。

#### 12.2.7 复制节点

- 运用传统的JS方法，使用`cloneNode`来复制节点

- jQuery 中使用 clone() 的方法复制节点

  clone(true) 参数可以为空,表示只复制元素和内容,不复制事件行为。而加上 true 参数的话,这个元素附带的事件处理行为也复制出来 

  



## 十二、jQuery事件

### 12.1 常见事件

- JavaScript 有一个非常重要的功能,就是事件驱动。当页面完全加载后,用户通过鼠标或键盘触发页面中绑定事件的元素即可触发。

- 为了使开发者更加方便的绑定事件,jQuery 封装了常用的事件以便节约更多的代码。我们称它为简写事件

| **方法名**     | **触发条件** | **描述**                                       |
| -------------- | ------------ | ---------------------------------------------- |
| click(fn)      | 鼠标         | 触发每一个匹配元素的 click(单击)事件           |
| dblclick(fn)   | 鼠标         | 触发每一个匹配元素的 dblclick(双击)事件        |
| mousedown(fn)  | 鼠标         | 触发每一个匹配元素的 mousedown(点击后)事件     |
| mouseup(fn)    | 鼠标         | 触发每一个匹配元素的 mouseup(点击弹起)事件     |
| mouseover(fn)  | 鼠标         | 触发每一个匹配元素的 mouseover(鼠标移入)事件   |
| mouseout(fn)   | 鼠标         | 触发每一个匹配元素的 mouseout(鼠标移出)事件    |
| mousemove(fn)  | 鼠标         | 触发每一个匹配元素的 mousemove (鼠标移动)事件  |
| mouseenter(fn) | 鼠标         | 触发每一个匹配元素的 mouseenter (鼠标穿过)事件 |
| mouseleave(fn) | 鼠标         | 触发每一个匹配元素的 mouseleave (鼠标穿出)事件 |
| keydown(fn)    | 键盘         | 触发每一个匹配元素的 keydown (键盘按下)事件    |
| keyup(fn)      | 键盘         | 触发每一个匹配元素的 keyup (键盘按下弹起)事件  |
| resize(fn)     | 文档         | 触发每一个匹配元素的 resize (文档改变大小)事件 |
| scroll(fn)     | 文档         | 触发每一个匹配元素的 scroll (滚动条拖动)事件   |
| focus(fn)      | 表单         | 触发每一个匹配元素的 focus (焦点激活)事件      |
| blur(fn)       | 表单         | 触发每一个匹配元素的 blur (焦点丢失)事件       |
| focusin(fn)    | 表单         | 触发每一个匹配元素的 focusin (焦点激活)事件    |
| select(fn)     | 表单         | 触发每一个匹配元素的 select (文本选定)事件     |
| change(fn)     | 表单         | 触发每一个匹配元素的 change (值改变)事件       |
| submit(fn)     | 表单         | 触发每一个匹配元素的 submit (表单提交)事件     |

### 12.2 jQuery事件对象

- 对于原生事件对象，由于浏览器的差异，开发者总是需要做兼容性的处理；为了解决这个问题，jquery封装了自己的事件对象，解决了原生事件对象的兼容性问题，还另外提供了很多新的属性和方法。
- jQuery 提供了一个事件对象的方法:event.stopPropagation();这个方法设置到需要触发的事件上时,所有上层的冒泡行为都将被取消
- jQuery 提供了一个事件对象的方法:event. preventDefault()；这个方法用来阻止默认行为

### 12.3 jQuery绑定事件

#### 12.3.1 bind 绑定事件

- bind()方法无法动态绑定尚未存在的元素

- 之后又出现 .live()（jQuery1.4.3 版本中废弃了）、.delegate()（jQuery1.7 版本中被整合替代） 等方法（目前如果使用  底层用的都是on）

#### 12.3.2 on绑定事件

- 之前绑定事件的方法有三个。由于这三个的共存可能会造成一定的混乱, 为此 jQuery1.7 以后推出了 .on() 方法彻底摒弃前面三个。
  - **events**: 事件类型 。
  - **selector**: 触发事件的选择器元素的后代
  - **data**: 当一个事件被触发时要传递 event.data 给事件处理函数。
  - **fn**: 该事件被触发时执行的函数。
- on还可以**多个事件绑定同一个函数**、**多个事件绑定不同函数**



#### 12.3.3 off解绑事件

- 之前解除绑定事件的方法有三个。由于这三个的共存可能会造成一定的混乱, 为此 jQuery1.7 以后推出了 .off() 方法彻底摒弃前面三个。
  - **events**: 事件类型 。
  - **selector**: 一个最初传递到 .on() 事件处理程序附加的选择器
  - **fn**: 该事件被触发时执行的函数。

#### 12.3.4 one绑定事件

- 不管是 .bind() 还是 .on() ,绑定事件后都不是自动移除事件,需要通过 .unbind()和 .off() 来手工移除。jQuery 提供了 .one() 方法,绑定元素执行完毕后自动移除事件,方法仅触发一次的事件。 
  - **type:** 添加到元素的一个或多个事件。
  - **data:** 将要传递给事件处理函数的数据映射
  - **fn****:** 每当事件触发时执行的函数。



## 十三、jQuery 扩展

### 13.1 什么是jQuery扩展

- jQuery自定义了jQuery.extend()和jQuery.fn.extend()方法

- jQuery.extend()为扩展jQuery类本身.为类添加新的方法

  ```js
  // 为jQuery类添加类方法，可以理解为添加静态方法。
  jQuery.extend({
      min: function(a, b) {
          return a < b ? a : b;
      },
      max: function(a, b) {
          return a > b ? a : b;
      }
  });
  jQuery.min(2, 3); //  2 
  jQuery.max(4, 5); //  5
  ```

  

- jQuery.fn.extend(object);给jQuery对象添加方法。jQuery.fn = jQuery.prototype。

  ```js
  //就是为jQuery类添加“成员函数”。jQuery类的实例才可以调用这个“成员函数”。
  $.fn.extend({
      alertWhileClick: function() {
          $(this).click(function() {
              alert($(this).val());
          });
      }
  });
  //$("#input1")是jQuery的实例，调用这个扩展方法
  $("#input1").alertWhileClick();
  ```

  

### 13.2 jQuery书写插件

- 插件名推荐使用 jquery.[插件名].js ,以免和其他 js 或者其他库相冲突; 

- 局部对象附加 jquery.fn 对象上,全局函数附加在 jquery 上; 

- 插件内部 this 指向是当前的局部对象;

- 可以通过 this.each 来遍历所有元素; 

- 所有的方法或插件,必须用分号结尾,避免出现问题; 

- 插件应该返回的是 jQuery 对象,以保证可链式连缀; 

- 避免插件内部使用 $ ,如果要使用,请传递 jQuery 进去。 



