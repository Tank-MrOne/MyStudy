(()=>{

	//书写完整函数类型
	const add:(a:number,b:number)=>number  = function(x: number, y: number): number { 
		return x + y
	}

	//可选参数
	function buildName(firstName:string="SB", lastName?:string):string {
		if (lastName) {
			return firstName + '-' + lastName
		} else {
			return firstName
		}
	}

	//剩余参数
	function demo(a:number,...args:number[]){
		console.log(a);
		console.log(args);
	}
	demo(1,2,3,4)

	//函数重载
	//定义一个函数，接收两个参数：可能都是字符串，或者都是数字。
	//若为字符串返回两个串拼接的结果,若为数字则返回二者的差值
	function test(a:string,b:string):string
	function test(a:number,b:number):number

	function test(a:string|number,b:string|number):string|number{
		if(typeof a === 'string' && typeof b === 'string'){
			return a + b
		}else if(typeof a === 'number' && typeof b === 'number') {
			return a - b
		}
	}
	console.log(test('q','w'));
	console.log(test(10,5));
	// test(1,'q')
	// test('q',1)


})()