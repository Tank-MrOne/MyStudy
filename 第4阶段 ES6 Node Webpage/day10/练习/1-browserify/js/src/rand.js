function rand(m,n){
    return Math.ceil(Math.random() * (n-m+1)) + m-1;
}

module.exports = rand;