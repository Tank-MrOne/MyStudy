# 3. 类

对于传统的 JavaScript 程序我们会使用`函数`和`基于原型的继承`来创建可重用的组件，但对于熟悉使用面向对象方式的程序员使用这些语法就有些棘手，因为他们用的是`基于类的继承`并且对象是由类构建出来的。 从 ECMAScript 2015，也就是 ES6 开始， JavaScript 程序员将能够使用基于类的面向对象的方式。 使用 TypeScript，我们允许开发者现在就使用这些特性，并且编译后的 JavaScript 可以在所有主流浏览器和平台上运行，而不需要等到下个 JavaScript 版本。

## 基本示例

下面看一个使用类的例子：

```typescript
/* 
类的基本定义与使用
*/
class Person {
  //声明属性
  name:string
  age:number
  
  //构造方法
  constructor(name,age){
    this.name = name
    this.age = age
  }

  //一般方法
  speak():void{
    console.log(`我的名字是${this.name},我的年龄是${this.age}`)
  }

}
//创建类的实例
const person1 = new Person('tom',19)
//调用实例的方法
person1.speak()
```

如果你使用过 C# 或 Java，你会对这种语法非常熟悉。 我们声明一个 `Person` 类。这个类有 4个成员：一个叫做 `name` 的属性，一个叫做 `age` 的属性，一个构造函数和一个 `speak` 方法。

你会注意到，我们在引用任何一个类成员的时候都用了 `this`。 它表示我们访问的是类的成员。

后面一行，我们使用 `new` 构造了 `Person` 类的一个实例。它会调用之前定义的构造函数，创建一个 `Person` 类型的新对象，并执行构造函数初始化它。  

最后一行通过 `person1` 对象调用其 `speak` 方法

## 继承

在 TypeScript 里，我们可以使用常用的面向对象模式。 基于类的程序设计中一种最基本的模式是允许使用继承来扩展现有的类。

看下面的例子：

```typescript
class Animal {
  run (distance: number) {
    console.log(`动物奔跑了${distance}米`)
  }
}

class Dog extends Animal {
  cry () {
    console.log('汪汪汪！')
  }
}

const dog = new Dog()
dog.cry() 
dog.run(100) // 可以调用从父中继承得到的方法
```

这个例子展示了最基本的继承：类从基类中继承了属性和方法。 这里，`Dog` 是一个 派生类，它派生自 `Animal` 基类，通过 `extends` 关键字。 派生类通常被称作*子类*，基类通常被称作*超类*。

因为 `Dog` 继承了 `Animal` 的功能，因此我们可以创建一个 `Dog` 的实例，它能够 `cry()` 和 `run()`。

## 多态
多态指同一个实体同时具有多种形式。它是面向对象程序设计（OOP）的一个重要特征。如果一个语言只支持类而不支持多态，只能说明它是基于对象的，而不是面向对象的，
下面我们来看个更加复杂的例子：

```typescript
//定义Animal基类
class Animal {
  //声明属性
  name:string

  //构造方法
  constructor(name){
    this.name = name
  }

  //一般方法
  run (distance: number) {
    console.log(`动物前进了 ${distance}m`)
  }
}

class Snake extends Animal{
  //构造方法
  constructor(name){
    super(name)
  }
  //重写从父类继承过来的方法
  run(distance:number){
    console.log(`蛇前进了${distance}米`)
  }
}

class Horse extends Animal{
  //构造方法
  constructor(name){
    super(name)
  }
  //重写从父类继承过来的方法
  run(distance:number){
    console.log(`马奔跑了${distance}米`)
  }
  //自己的一般方法
  cry(){
    console.log('hou~hou~')
  }
}

// 父类型引用指向子类型的实例 ==> 多态
let tom:Animal

tom = new Snake('蟒蛇')
tom.run(100)

tom = new Horse('短腿马')
tom.run(300)

```

这个例子展示了一些上面没有提到的特性。 这一次，我们使用 `extends` 关键字创建了 Animal的两个子类：`Horse` 和 `Snake`。

与前一个例子的不同点是，派生类包含了一个构造函数，它 必须调用 `super()`，它会执行基类的构造函数。 而且，在构造函数里访问 `this` 的属性之前，我们 一定要调用 `super()`。 这个是 TypeScript 强制执行的一条重要规则。

这个例子演示了如何在子类里可以重写父类的方法。`Snake`类和 `Horse` 类都创建了 `run` 方法，它们重写了从 `Animal` 继承来的 `run` 方法，使得 `run` 方法根据不同的类而具有不同的功能。注意，即使 `tom` 被声明为 `Animal` 类型，但因为它的值是 `Horse`，调用 `tom.run(34)` 时，它会调用 `Horse` 里重写的方法。


## 公共、私有与受保护的修饰符

### 默认为 public

在上面的例子里，我们可以自由的访问程序里定义的成员。 如果你对其它语言中的类比较了解，就会注意到我们在之前的代码里并没有使用 `public` 来做修饰；例如，C# 要求必须明确地使用 `public` 指定成员是可见的。 在 TypeScript 里，成员都默认为 `public`，当然你也可以明确的将一个成员标记成 `public`。 

### 理解 private

当成员被标记成 `private` 时，它就不能在声明它的类的外部访问。  
```typescript
  /* 
    访问修饰符: 用来描述类内部的属性/方法的可访问性
      public: 默认值, 公开的外部也可以访问
      protected: 类内部、子类可以访问
      private: 只有类内部可以访问
  */
   //定义Person基类
   class Person {
    //声明属性
    private name:string //name属性加了private修饰，只能在类内部访问
    age:number //age属性没有加修饰，默认为public修饰

    //构造方法
    constructor(name:string,age:number){
      this.name = name
      this.age = age
    }
    //一般方法
    speak():string{
      return `我的名字是${this.name},我的年龄是${this.age}`
    }
  }

  let tom = new Person('tom',19)
  //console.log(tom.name) //属性“name”为私有属性，只能在类“Person”中访问
  console.log(tom.age) //19

```

### 理解 protected

```typescript
    class Person {
    private name:string
    age:string

    constructor (name,age){
      this.name = name
      this.age = age
    }

    protected speak():string{
      return `我的名字是${this.name}，我的年龄是${this.age}`
    }
  }

  class Student extends Person {
    sex:string

    constructor (name,age,sex){
      super(name,age)
      this.sex = sex
    }

    study(){
      super.speak() //
      console.log('我在很努力的学习');
    }
  }


  let p1 = new Person('tom',19)
  console.log(p1.name);  // private私有的-不可见
  console.log(p1.age);  // public公开的-可见
  console.log(p1.speak());// protected受保护的-不可见
```

## readonly 修饰符

你可以使用 `readonly` 关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化。

```typescript
class Person {
  readonly name: string = 'abc'
  constructor(name: string) {
    this.name = name
  }
}

let john = new Person('John')
// john.name = 'peter' // error
```

### 参数属性

在上面的例子中，我们必须在 `Person` 类里定义一个只读成员 `name` 和一个参数为 `name` 的构造函数，并且立刻将 `name` 的值赋给 `this.name`，这种情况经常会遇到。 参数属性可以方便地让我们在一个地方定义并初始化一个成员。 下面的例子是对之前 `Person` 类的修改版，使用了参数属性：

```
class Person2 {
  constructor(readonly name: string) {
		this.name = name
  }
}

const p = new Person2('jack')
console.log(p.name)
```

注意看我们是如何舍弃参数 `name`，仅在构造函数里使用 `readonly name: string` 参数来创建和初始化 `name` 成员。 我们把声明和赋值合并至一处。

参数属性通过给构造函数参数前面添加一个访问限定符来声明。使用 `private` 限定一个参数属性会声明并初始化一个私有成员；对于 `public` 和 `protected` 来说也是一样。

## 存取器

`TypeScript` 支持通过 `getters/setters` 来截取对对象成员的访问。 它能帮助你有效的控制对对象成员的访问。

```typescript
class Person {
  firstName: string = 'A'
  lastName: string = 'B'

  constructor(firstName,lastName){
    this.firstName = firstName
    this.lastName = lastName
  }

  get fullName(){
    return this.firstName + '-' + this.lastName
  }

  set fullName(value){
    const names = value.split('-')
    this.firstName = names[0]
    this.lastName = names[1]
  }
}
const p = new Person('zahng','san')
console.log(p.fullName);
```

## 静态属性

到目前为止，我们只讨论了类的实例成员，那些仅当类被实例化的时候才会被初始化的属性。 我们也可以创建类的静态成员，这些属性存在于类本身上面而不是类的实例上。 

```typescript
class Person {
  name: string = 'petter'
  static info: string = 'some info'
}

console.log(Person.info)
console.log(new Person().name)
```

## 抽象类

抽象类做为其它派生类的基类使用。 它们不能被实例化。不同于接口，抽象类可以包含成员的实现细节。 `abstract` 关键字是用于定义抽象类和在抽象类内部定义抽象方法。

```typescript
  //定义一个抽象类
  abstract class Animal {
    abstract cry ():void //定义一个抽象方法cry
    run () { //定义一个方法run
      console.log('正在奔跑....')
    }
  }
  
  class Dog extends Animal {
    cry () {
      console.log('汪汪汪！')
    }
  }
  
  const dog = new Dog()
  dog.cry()
  dog.run()
```
