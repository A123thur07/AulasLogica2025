const prompt = require('prompt-sync')();   
    //Entrada
var num1= Number(prompt('Escreva o primeiro número'));
var num2= Number(prompt('Escreva o segundo número'));
    //processamento
var soma= num1+num2;
    //Saída
console.log(`A soma de ${num1} mais ${num2} é ${soma}`);
