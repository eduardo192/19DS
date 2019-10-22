let sum = 0;
let n = 10;
let fDir = (1 / 3 * Math.pow(n, 3));
for (let i = 1; i <= n; i++) {
    sum += (i ** 2);
}

console.log("Resultaod de sumatoria: " + sum);
console.log("Resultado de la formula directa: " + fDir);