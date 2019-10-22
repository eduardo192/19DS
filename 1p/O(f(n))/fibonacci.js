

let serie  = (x) => {
    let a=0,b=1,c=0,i=2;

    while(i<x){
        c = a+b;
        a=b;
        b=c;
        i++;
    }
    return "Ultimo elemento de la serie: " + c;
} 

console.log(serie(5));