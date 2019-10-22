let e = 2.7182, factorial = 1, sum = 1;

function fact(x){
    for(let i = 1; i<=x; i++){
        factorial *= i;
    }
    return factorial;
}

const ePow = (num)=>{
    let x = num,suma=1; 
    for(i = 0; i<10; i++){
        suma += (Math.pow(x,i)) / fact(i);
    }
    return suma;
}

console.log(ePow(10));