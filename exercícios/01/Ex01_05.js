const prompt = require('prompt-sync')();

//Entrada
var met= Number(prompt('Quantos metros?'));
//processamento
var cm= met*100;
var mm= met*1000;
var km= met/1000;
//Saída
console.log(`Os centímetros, milímetros e kilometros de ${met} metros é, respectivamente, ${cm} centímetros , ${mm} milímetros e ${km} kilometros`);

