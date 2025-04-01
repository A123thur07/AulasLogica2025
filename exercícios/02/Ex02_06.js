const prompt = require('prompt-sync')();   

var n1= parseInt(prompt('Qual é o primeiro número?'));
var n2= parseInt(prompt('Qual é o segundo número?'));
if (n1==n2){
    console.log('são iguais');
} else {
    console.log('são diferentes');
}
