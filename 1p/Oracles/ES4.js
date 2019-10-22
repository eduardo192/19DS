let sum = 0;
// a = 5 
let n = 10;
for (let i = 0; i <= n; i++) {
    sum += Math.pow(5, i);
}

let fDir = (Math.pow(5, (n + 1)) - 1) / (5 - 1);
console.log("Resultao de la sumatoria: " + sum);
console.log("Resultado de la formula duirecta: " + fDir);