const prompt = require('prompt-sync')();
//Entrada
var dinheiro= Number(prompt('Quanto tem?'));
//Processamento
var dolar= dinheiro/5.79;
//Saída
console.log(`Com R$ ${dinheiro} lhe é possiblilitado ${dolar.toFixed(2)} dolares`);// toFixed arredonda o número
