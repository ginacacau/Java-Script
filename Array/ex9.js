// Exercício 9 - Copiando um array


const readline = require("readline-sync");

let original = [10, 20, 30, 40, 50];
let copia = [];

for (let i = 0; i < original.length; i++) {
  copia[i] = original[i];
}

console.log("Original:", original);
console.log("Cópia:", copia);
