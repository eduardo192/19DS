let factorial = 1, sum = 1;

function fact(x){
    for(let i = 1; i<=x; i++){
        factorial *= i;
    }
    return factorial;
}

const ePow = ()=>{
    let suma=1; 
    for(i = 0; i<10; i++){
        suma += (Math.pow(1,i)) / fact(i);
    }
    return suma;
}

console.log(ePow());