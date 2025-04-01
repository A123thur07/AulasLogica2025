const prompt = require('prompt-sync')();
//Entrada
var km= Number(prompt('Quantos kilometro andou?'));
var dias= Number(prompt('Quantos dias vai andar?'));
//Processamento 
var preçd= dias*60;
var preçkm= km*0.15;
var preço= preçd+preçkm;
//Saída
console.log(`Para ${km} kilometros usados em ${dias} dias custará ${preço} reais`);
