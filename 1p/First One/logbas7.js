console.log("Logaritmo base 7....");

let x = 0;

function getlog() {

    while (x <= 100) {
        let log = Math.log(x) / Math.log(7);
        console.log("Funcion logaritmica base 7 de " + x + ": " + log);
        x++;
    }
};

getlog();