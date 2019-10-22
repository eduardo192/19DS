class Vector {
    constructor(array){
        if(typeof array == "object"){
            this.array = array;
        }
        else{
            return "ingresa un arreglo";
        }
    }

    getVector(){
        return this.array;
    }

    Resta(r){

        let arrayr = r;
        if(typeof arrayr == "object" && arrayr.length == this.array.length){
            let resta = new Array(this.array.length)
            for(let i = 0; i<this.array.length; i++){
                resta[i] = this.array[i] - arrayr[i] ;
            }
            return resta;
        }
        else{
            return "ingresa un arreglo";
        }
    }

    Mult(m){
        let arraym = m;
        if(typeof arraym == "object" && arraym.length == this.array.length){
            let multiplicacion = new Array(this.array.length)
            for(let i = 0; i<this.array.length; i++){
                multiplicacion[i] = this.array[i] * arraym[i] ;
            }
            return multiplicacion;
        }
        else{
            return "ingresa un arreglo";
        }
    }
    Sum(b){
        let arrayb = b;
        if(typeof arrayb == "object" && arrayb.length == this.array.length){
            let suma = new Array(this.array.length)
            for(let i = 0; i<this.array.length; i++){
                suma[i] = arrayb[i] + this.array[i];
            }
            return suma;
        }
        else{
            return "ingresa un arreglo";
        }
    }
}
let arreglo = [5,6,7,8];
const Vect = new Vector(arreglo);
console.log(Vect.getVector());
console.log(Vect.Sum([2,2,2,2]));
console.log(Vect.Resta([2,2,2,2]));
console.log(Vect.Mult([2,2,2,2]));