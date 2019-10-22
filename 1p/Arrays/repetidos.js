const arreglo = [3,8,1,5,6,7];
let repetidos = false,i=1,num=arreglo[0];
 
for(let i =0; i< arreglo.length; i++){

    if(repetidos){
        break;
    }
    for(let k =0; k< arreglo.length; k++){
        if(arreglo[i] == arreglo[k] && i!=k){
            repetidos = true;   
        }
    }
}
if(repetidos){
    console.log("Si hay numeros repetidos");
}
else{
    console.log("No hay numeros repetidos");
}
