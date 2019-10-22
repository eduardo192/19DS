class Matrix {
    
    constructor(f,c){

        this._f = f;
        this._c = c;
        this._array = [];
        
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
    isIdentity(){
        
        if(this.IsSquare()){
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
        }
        

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
            return "Is Square";
        }
        else{
            return "Is not square";
        }
    };
}
let matris = new Matrix(2,2);
console.log(matris.initRandom());
console.log(matris.getCol(0));
console.log(matris.getRow(1));
console.log(matris.IsSquare());
console.log(matris.getMatrix());
console.log(matris.isIdentity());
