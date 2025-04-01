const prompt = require('prompt-sync')();   

var n= parseInt(prompt('Qual é o número?'))

if (n>=0){
    console.log('número positivo');
} else{
    console.log('número negativo');
}