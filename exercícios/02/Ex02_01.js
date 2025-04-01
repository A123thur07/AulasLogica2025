const prompt = require('prompt-sync')();   

var nota1= Number(prompt('Qual a primeira nota?'));
var nota2= Number(prompt('Qual a segunda nota?'));
var média= (nota1+nota2)/2;
if (média>=7){
    console.log('Aprovado');    
} else {
    console.log('Reprovado');
    
}