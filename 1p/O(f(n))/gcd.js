
//O(n)
const mcd = (a,b) => {
    let resto = 0;
    while(a%b != 0){
        resto = a%b;
        a=b;
        b=resto;    
    }
    return b;
}

console.log(mcd(8,12));