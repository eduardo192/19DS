class Fibonacci {
    constructor(n) {
        this.numero = n;
    }
    getValue(n= this.numero ) {
        return n < 2 ? n : this.getValue(n - 1) + this.getValue(n - 2);
    }
    getCost( n = this.numero ) {
        let cont = 0;
        function value(n){
            if(n < 2){
                cont++;
            } else {
                cont++;
                return value(n-1) + value(n-2);
            }
        }
        value(n);
        return cont;
    }
    getSucesion() {
        let sucesion = [];
        for (let i = 1; i <= this.numero; i++) {
            sucesion.push(this.getValue(i));
        }
        return sucesion;
    }
    getTable() {
        console.log("  n  - c - v ");
        for(let i = 0; i <= this.numero; i++){
            console.log("f(" + i + ") - " + this.getCost(i) + " - " + this.getValue(i));
        }
    }
}

let ejemplo = new Fibonacci(5);
console.log(ejemplo.getValue());
console.log(ejemplo.getSucesion()); 
console.log(ejemplo.getCost());
console.log(ejemplo.getTable());