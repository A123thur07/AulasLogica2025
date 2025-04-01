const prompt = require('prompt-sync')();   

var a= Number(prompt('Escreva o primeiro número'));
var b= Number(prompt('Escreva o segundo número'));
if (a>b){
      console.log(`${a} é maior que ${b}`);      
} else {
    console.log(`${b} é maior que ${a}`);
} 