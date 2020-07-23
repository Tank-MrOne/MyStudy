//function myMoney(){
	//普通函数定义闭包实现自定义的模块
//	var money = 10000000;//私有资源
//	
//	function getMoney(){
//		console.log(money);
//	}
//	
//	function setMoney(data){
//		money += data;
//	}
//	
//	return {
//		getMoney:getMoney,
//		setMoney:setMoney
//	}
//}


(function(){
	//匿名函数定义闭包实现自定义的模块
	var money = 10000000;//私有资源
	
	function getMoney(){
		console.log(money);
	}
	
	function setMoney(data){
		money += data;
	}
	
	window.getMoney = getMoney;
	window.setMoney = setMoney;
})();




