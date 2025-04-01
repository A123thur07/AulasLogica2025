const prompt = require('prompt-sync')();   

var num= Number(prompt("Qual é o número?"))
if (num%2==0){
    console.log("Par");
} else{
    console.log("Ímpar");
}