let arreglo = [3,2,2,3,1], arreglo2 = new Array(arreglo.length);

const matrix = (x)=> {
    arr = x;
    for(let i = 0; i<arr.length; i++){
        arr[i] = new Array();
    }

    return arr
}

const cList = (x) => {
    let matrix = x;
    for(let i =1; i<matrix.length-1; i++){
        if(matrix[0][0] == matrix[i][0]){
            
        }
    }
}

const lista = (x,y) =>{
    let vc = x, mat = y, repetido = 1, indiceI = [], indiceJ = [];

    for(let i = 0; i < vc.length  ; i++){
        mat[i][0] = vc[i];
        for(let j = 0; j < vc.length; j++){
            if(vc[i] == vc[j] && i != j && indiceI[j] != j && indiceJ[i] != i){
                repetido ++;
                indiceI[i] = i;
                indiceJ[j] = j;
            }
        }
        mat[i][1] = repetido;
        /*if(repetido == 4 && i == vc.length){
            break;
        }*/
        repetido = 1
    }
    
    return mat;
}

/*const llenarMatrix = (x) => {
    Matrix = x;
    for(let i = 0; i < Matrix.length; i++){
        for(let j = 0; j<2; j++){
            Matrix[i][j] = 2;
        }
    }

    Matrix[2][1] = 6;

    return Matrix;
} */

arreglo2 = matrix(arreglo2);
arreglo2 = lista(arreglo,arreglo2);

let list = "Hay "
for(let i = 0; i < arreglo2.length -1; i++){
    list += arreglo2[i][1] + ": " + arreglo2[i][0] + "\n";
}

console.log(list);