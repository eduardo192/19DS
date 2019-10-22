//funcion flecha que retorna el valor de la pocision dada en una sucesion de numeros primos
const Prime = (x) => {
    //pocision en la sucesion del valor a buscar
    let pos = x,
    totDiv = 0 /*cantidad de divisores*/,
    con = 0 /*contador de numeros primos*/,
    i = 2 /*inicialisador de ciclo*/;
    //lleva el control de los numeros primos
    while(con!=pos){
        //divicion de el numeor entre todos los numeros que hay antes de el y el mismo
        for(let div = 0; div <= i; div++){
            if(i%div == 0){
                totDiv++;
            }
        }
        //si es primo solo tiene 2 divisores
        if(totDiv == 2){
            con++;
        }
        totDiv = 0;
        i++;

    }
    return (i-1) + " esta en la posicion: " + con;
}

console.log(Prime(12));