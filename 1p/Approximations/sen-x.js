let factorial = 1;
let signo = true;

function fact(x){
    for(let i = 1; i>=x;i++){
        factorial *= i;
    }
    return factorial;
}

let x = 2;
let sum = 0;

for(let i = 1; i<=9; i+=2){
    if(signo){
        sum += Math.pow(x,i) / fact(i);
        signo = false;
    }
    else{
        sum -= Math.pow(x,i) / fact(i);
        signo = true;
    }
    
}

console.log(sum);