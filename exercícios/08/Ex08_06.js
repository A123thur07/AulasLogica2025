const prompt = require('prompt-sync')();
function Divisao(n1,n2){
    var d=n1/n2
    return d
}

var divisao= Divisao(Number(prompt('Digite o número:')),Number(prompt('Digite o divisor:')))
console.log(divisao);
