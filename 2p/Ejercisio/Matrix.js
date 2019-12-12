class Matrix {
    
    constructor(f,c){
        this._f = f;
        this._c = c;
        this._array = [];
        this._mIdentidad;
    };
    
    //retorna una matris llena de elementos aleatorios 
    initRandom(){
        let arreglo = new Array(this._f),f,c;

        for(f = 0; f<this._f;f++){
            arreglo[f] = new Array(this._c);
        }
        
        for(f = 0; f<this._f;f++){

            arreglo[f] = new Array(this._c);

            for(c = 0; c<this._c; c++){
                arreglo[f][c] = parseInt(Math.random()*10);
            }
        }
        
        this._array = arreglo;
    };
    get c (){return this._c};
    get f (){return this._f};

    //retorna la matriz 
    getMatrix(){
        return this._array;
    }
    getRow(r){

        let fila = new Array(), row= r;  
        for(let i = 0; i<this._c; i++){
            fila[i] = this._array[row][i];
        }
        return fila;
        
    };
    getCol(c){
        let columna = new Array(), col = c;
        for(let i = 0; i<this._f;i++){
            columna[i] = this._array[i][col];
        }
        return columna;
    };
    isIdentity(arr){
              
        let arreglo = arr;
        if(this.IsSquare()){
            for(let i = 0; i<this._f;i++){
                if(arreglo[i][i] != 1){
                    return false;
                }
            }
            return true;
        }else{
            return false;
        }
        
        /*if(this.IsSquare()){
            let diaPrinicpal = new Array(this._c);
            for(let i = 0; i<this._c; i++){
                if(this._array[i][i] == 1){
                    diaPrinicpal[i] = this._array[i][i];
                }
                else{
                    return false;
                    break;
                }
            }
            return true;
        }
        else{
            return false;
        }*/

    }

    initIdentity(){

        let mIdentidad = new Array(this._f);
        for(let i = 0;i<this._f;i++){
            mIdentidad[i] = new Array(this._c);
        }

        for(let f = 0;f<this._f;f++){
            for(let c = 0;c<this._c;c++){
                if(f==c){
                    mIdentidad[f][c] = 1;
                }else{
                    mIdentidad[f][c] = 0;
                }
            }
        }

        this._mIdentidad = mIdentidad;
        return mIdentidad;

    }

    isSymetric(){
        if(this.IsSquare()){
            return true;
        }
        else{
            return false;
        }
    }

    IsSquare(){

        if(this._c == this._f ){
            return true;
        }
        else{
            return false;
        }
    };
}
let matris = new Matrix(8,8);
console.log("----------Matriz 1--------");
matris.initRandom();
console.log("Is Square: " + matris.IsSquare());
console.log("Matrisz Identidad\n")

console.log(matris.initIdentity());
console.log("\nIs identity:" + matris.isIdentity(matris._mIdentidad));


console.log("-------Matriz 2---------");
let matris2 = new Matrix(6,4);
matris2.initRandom();

console.log("\nIs square: " + matris2.IsSquare());
console.log("Matrisz Identidad \n");
console.log(matris2.initIdentity());
console.log("\nIs identity: "+ matris.isIdentity(matris._mIdentidad));

