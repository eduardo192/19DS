let arreglo = [3,2,2,3,1],arreglo2 = new Array(arreglo.length);

const Matrix = (x)=> {
    arr = x;
    for(let i = 0; i<arr.length; i++){
        arr[i] = new Array();
    }

    return arr
}

const Repetidos = (x) => {
    let mtrix = x, arreglorepetido = new Array();

}

const Lista = (x,y) =>{
    let vc = x, mat = y, repetido = 1,indexi = [], indexj = [];

    for(let i = 0; i < vc.length     ; i++){
        mat[i][0] = vc[i];
        for(let j = 0; j < vc.length; j++){
            if(vc[i] == vc[j] && i != j && indexj[i] != i  && indexi[j] != j){
                repetido ++;
                indexi[i] = i;
                indexj[j] = j;

            }
        }
        mat[i][1] = repetido;
       /* if(repetido == 4 && i == vc.length){
            break;
        }*/
        repetido = 1;
    }
    
    return mat;
}

arreglo2 = Matrix(arreglo2);
arreglo2 = Lista(arreglo, arreglo2);
console.log(arreglo2);

