const prompt = require('prompt-sync')();
function Operacao(n1,op,n2){
var conta
    if (op=='+') {
    conta=n1+n2
 } else if(op=='-'){
    conta=n1-n2
 } else if(op=='*'){
    conta=n1*n2
 } else if(op=='/'){
    conta=n1/n2
 } else if(op== '**'){
    conta=n1**n2
 }
 console.log(conta);
}


Operacao(Number(prompt('Digite o 1º numero: ')),prompt('Digite o operador: '),Number(prompt('Digite o 2º numero: ')) )