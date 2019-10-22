 const Permutacion = (n,r) => Factorial(n) / Factorial((n-r));

 const Factorial = (x) => {
     let factorial = 1;
    for(let i = 1; i<=x; i++){
        factorial *= i;
    }
    return factorial;
 };

 console.log("Resultado: " + Permutacion(8,5))