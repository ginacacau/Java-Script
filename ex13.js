const readline = require("readline-sync");


const aluno = [

    {
    nome:"Lucas",
    idade:17,
    curso:"ds",
    matriculaativa:true,
    notas: [10, 8, 7, 5]

}, 

{
    nome:"Giovanna",
    idade:17,
    curso:"ds",
    matriculaativa:true,
    notas: [9,8,10,9,5]
}, 


]
let notas = [aluno]
let soma = 0; 
for (let i = 0; i < notas.length; i++) {
    soma = soma + notas[i];
  }
  
  let media = soma / notas.length;
  
  console.log("Soma: " + soma);
  console.log("Média: " + media);
  
console.log( aluno)