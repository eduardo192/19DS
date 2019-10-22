let sum = 0;
let n = 10;
let k = 5;
for (let i = 1; i <= n; i++) {
    sum += Math.pow(i, k);
}

let fDir = (1 / (k + 1)) * Math.pow(n, (k + 1));

console.log("Resultado de la sumatoria: " + sum);
console.log("Resultado de la formula directa: " + fDir);