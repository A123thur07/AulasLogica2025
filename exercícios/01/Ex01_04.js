const prompt = require('prompt-sync')();   
//Entrada
var nota1= Number(prompt('Qual a primeira nota?'));
var nota2= Number(prompt('Qual a segunda nota?'));
//Processamento
var média= (nota1+nota2)/2;
//Saída
console.log(`A média das notas ${nota1} e ${nota2} é ${média}`);
