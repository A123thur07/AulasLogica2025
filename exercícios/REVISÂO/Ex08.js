const prompt = require('prompt-sync')();
function PositivoOuNegativo(num){
    if (num>=0){
        console.log('O número é positivo');
    } else {
        console.log('O número é negativo');
    }
}
 
PositivoOuNegativo(Number(prompt('digite o número: ')))