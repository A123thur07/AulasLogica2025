const prompt = require('prompt-sync')();
var qtdep=0
var totalp=0
var qtdei=0
var totali=0
for (var n=1; n<=5;n++ ){
    var num= Number(prompt('Qual é o número? '))
    if(num%2==0){
        qtdep++;
        totalp=totalp+num
    } else{
        qtdei++
        totali=totali+num
    }
} console.log(`A quantidade de pares é ${qtdep}, a soma é ${totalp}, e a quantidade de impares é ${qtdei}, a soma é ${totali}`);
