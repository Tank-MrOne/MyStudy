function fib(n){
	if(n <= 2){
		return 1;
	}
	return fib(n- 1) + fib(n - 2);
}
			

self.onmessage = function(e){
	e = e || window.event;
//	console.log(e.data);//就 可以拿到主线程给我 发过来的消息内容
	
	var result = fib(e.data);
	self.postMessage(result);//分线程接受到主线程的消息，然后开始计算，把计算后的记过发消息再给主线程
	
}
