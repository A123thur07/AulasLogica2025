const prompt = require('prompt-sync')();   
//Entrada
var numInt= parseInt(prompt('Digite o número:'));
//Processamento
var numInt1= numInt+1;
var numInt2= numInt-1;
//Saída
console.log(`O antecessor e sucessor de ${numInt} é, respectivamente, ${numInt2} e ${numInt1}`);
