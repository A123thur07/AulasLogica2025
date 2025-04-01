const prompt = require('prompt-sync')();
//Entrada
var altura= Number(prompt('Qual a altura?'));
var largura= Number(prompt('Qual a largura?'));
//Processamento
var litrosdetinta= altura*largura/2;
//Saída
console.log(`Para ${altura} de altura e ${largura} de lagura será necessário ${litrosdetinta} litros de tinta`);
