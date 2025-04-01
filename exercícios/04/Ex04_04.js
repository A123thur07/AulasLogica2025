const prompt = require('prompt-sync')();
var maiorNr = 0;
let contador = 0;

while(contador <= 10){
    var num= Number(prompt(`Qual é o ${contador}º numero?`))

    contador++
}