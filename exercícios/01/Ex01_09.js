const prompt = require('prompt-sync')();
//Entrada
var preço= Number(prompt('Qual é o preço?'));
var desconto= 5;
//Processamento
var descPreç= (desconto/100)*preço;
var novopreço= preço-descPreç;
//Saída
console.log(`O ${preço} de preço com ${desconto}% de desconto é igual á ${novopreço.toFixed(2)} `);
