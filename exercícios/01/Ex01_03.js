const prompt = require('prompt-sync')();   
//Processamento
var num= Number(prompt('Qual o número?'));
//Processamento
var dobro= num*2;
var triplo= num*3;
var elevado= num**3;
//Saída
console.log(`O dobro,o triplo e o valor elevado ao cubo do número ${num} é, respectivamente, ${dobro},${triplo} e ${elevado}`);
