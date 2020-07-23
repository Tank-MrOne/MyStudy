//将 rand 函数包裹为 AMD 模块
define(function(){
    function rand(m,n){
        return Math.ceil(Math.random() * (n-m+1)) + m-1;
    }

    return rand;
});    
    
    

