//对象接口
interface Iperson {
	readonly id:string,
	name:string,
	age:number,
	sex?:string
}

const person:Iperson =  {
	id:'001',
	name:'tom',
	age:19,
}
// person.id = '007'

//函数接口
//定义一个查找关键字的函数，接收两个参数：查找源、关键词，返回布尔值表达是否包含该关键词。
interface IfindKeyWord{
	(a:string,b:string):boolean
}

const findKeyWord:IfindKeyWord = function (source,keyWord){
	return source.search(keyWord) > -1
}
console.log(findKeyWord('abc','c'));


//类接口
//车轮接口
interface Iwhell{
	whellType:string
	roll():void
}

//灯光接口
interface Ilight{
	lightOn():void
	ligthOff():void
}

//定义一个汽车配置的专用接口，继承Iwhell、Ilight
interface IcarOption extends Iwhell,Ilight{

}

class Car implements IcarOption {
	//类中的赋值语句，实例自身追加一个whellType的属性，值为:防滑轮胎
	whellType = '防滑轮胎'
	//类中的一般方法
	roll(){
		console.log('车轮在飞速的滚动');
	}
	lightOn(){
		console.log('灯开了');
	}
	ligthOff(){
		console.log('灯关了');
	}
	
}

const c1 = new Car()
console.log(c1.whellType);
c1.roll()
c1.lightOn()
c1.ligthOff()