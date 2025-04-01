const prompt = require('prompt-sync')();
var total=0
var qtdedepares=0
var qtdedeimpares=0
var somadepares=0
var somadeimpares=0
while (true) {
    var numero = Number(prompt('digite o número(0 para encerrar): '))
    if(numero==0) {
        break;
    } else{
        total=numero+total;
       if (total%2==0) {
        qtdedepares++;
        somadepares+=numero;
       } else {
        qtdedeimpares++;
        somadeimpares+=numero;
       }
    }
}

console.log(`Você digitou ${qtdedepares} numeros pares, a soma deles é ${somadepares}, e ${qtdedeimpares} números de ímpares, e a soma deles é ${somadeimpares}. `);
console.log(`Valor total é ${total}`);
