class Promise
{
    constructor(executor){
        console.log(executor);
    }
}

let p = new Promise((resolve, reject)=>{})

console.log(p);