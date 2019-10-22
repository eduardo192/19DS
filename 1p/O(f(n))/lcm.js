//Revisar este link https://tutorias.co/ciclo-while-javascript-minimo-comun-multiplo/

const imc = (a,b) => {
    let valueNuma = a, valueNumb = b, mcm = 1, num1=a,num2=b, div=2;

    while(div<=num1 || div <= num2){
        while( (div <= num1 && num1%div == 0) || ( div <= num2 && num2%div == 0)){
            mcm *= div;
            if(div <= num1 && num1%div == 0){
                num1 = num1 / div;
            }
            if( div <= num2 && num2%div == 0 ){
                num2 = num2 / div;
            }
        }
        div++;
    }
    return "El minimo comun multiplo de lo numeros " + valueNuma + " y " + valueNumb +" es: " + mcm;
}

console.log(imc(12,8));