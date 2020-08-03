(()=>{

	//name必须为string，age必须为numner，welcome必须返回一个字符串
	function welcome(name:string,age:number):number{
		console.log(`欢迎${name},${age}来到TS的世界！`);
		return 1
	}
	welcome('tom',19)
	//welcome(250)//类型“250”的参数不能赋给类型“string”的参数

})()
