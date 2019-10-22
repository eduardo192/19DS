
let fact = (x) =>{
    let factorial = 1;
    for(let i = 1; i<=x; i++){
        factorial *= i;
    }
    return factorial;
}

let cos = (num) => {
    let x = num, suma = 1, signo = true;
    for(let i = 0;i<10; i++){
        if(signo){
            suma += (Math.pow(x,i)) / fact(i);
            signo = false;
        }
        else{
            suma -= (Math.pow(x,i)) / fact(i);
            signo = true;
        }
    }
    return suma;
}

console.log(cos(5));