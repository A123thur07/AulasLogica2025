const prompt = require('prompt-sync')();

var n1= Number(prompt('Qual a primeira nota: '))
var n2= Number(prompt('Qual a segunda nota: '))
var m= (n1+n2)/2
if (m>7 && m<=10) {
    console.log('Aprovado');
} else if(m<=7 && m>=5) {
    console.log('Recuperação');
} else {
    console.log('Reprovado');
    
}
