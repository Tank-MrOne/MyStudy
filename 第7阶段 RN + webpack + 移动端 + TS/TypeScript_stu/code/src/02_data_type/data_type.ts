(()=>{

	//布尔值
	let isDone:boolean = false;
	isDone = true;
	//isDone = 2; //不能将类型“2”分配给类型“boolean”。

	//数字
	let a1:number = 10 // 十进制
	let a2:number = 0b1010  // 二进制
	let a3:number = 0o12 // 八进制
	let a4:number = 0xa // 十六进制
	//console.log(a1,a2,a3,a4);

	//字符串
	let str1:string = 'hello,1227'
	//str1 = 0 //不能将类型“0”分配给类型“string”
	console.log(str1);

	//undefined 和 null
	let u:undefined = undefined
	let n:null = null
	//备注:undefined 和 null一般用于给函数做类型注解

	//数组
	let arr1:number[] = [1,2]
	let arr2:string[] = ['1','2']
	let arr3:Array<number> = [2,4,6,8,10]
	console.log(arr1,arr2,arr3);

	//元组
	let t1:[number,string,string] = [2,'a','b']
	console.log(t1);
	console.log(t1 instanceof Array);

	//定义一个枚举，存储百家姓
	enum BookNames {Zhao=1,Qian=2,Sun=3,Li=4}
	console.log(BookNames);
	console.log(BookNames.Qian);
	console.log(BookNames[0]);

	//any
	let notSure: any = 4
	notSure = 'asd'
	notSure = true
	let arr4:any[] = [1,2,'3',true]

	//void(空) 
	//严重注意：默认情况下 null 和 undefined 是所有类型的子类型
	//那就意味着：你可以给null和undefined复制给任何一个数据类型的变量
	//一般不给一个变量加上void类型限制，因为如果加了，这个变量以后只能存储null和undefined
	function demo():void{
		console.log('demo');
	}

	//object
	function fn2(a:object):object {
		return [1,2]
	}
	console.log(fn2([1,2,3]))
	//console.log(fn2('abc') // error 类型“"abc"”的参数不能赋给类型“object”的参数
	console.log(fn2(Date))

	//联合类型写法
	//定义一个函数，接收到一个数字或字符串，返回一个字符串
	function fn3(a:number|string):string{
		return 'abc'
	}
	fn3(1)
	console.log(fn3('1'));

	//类型断言
	//定义一个函数，接收到一个字符串或数字，返回这个数字或字符串的长度
	function getLength(x:number|string):number{
		if((<string>x).length){
			return (x as string).length
		}else{
			return x.toString().length
		}
	}
	console.log(getLength('abcde'));

	//类型推断(类型推导)
	let q = 1
	q = null


})()



