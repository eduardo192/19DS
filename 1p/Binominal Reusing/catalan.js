const Catalan = (x) => (Fact(2*x)/ (Fact(x+1) * Fact(x)));

function Fact(x){
    let factorial = 1;
    for(let i = 1; i<=x; i++){
        factorial *= i;
    }
    return factorial;
}

console.log(Catalan(8));