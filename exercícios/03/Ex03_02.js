const prompt = require('prompt-sync')();

var ano= Number(prompt('Qual é o ano atual: '))
var i=Number(prompt('Que ano nasceu: '))
var n1= ano-i
if (n1<=10) {
    console.log('Você é uma criança');
} else if(n1>=11 && n1<=17) {
    console.log('Você é um adolescente');
} else if(n1>=18 && n1<=59) {
    console.log('Você é um adulto');
} else {
    console.log('Você é um idoso');
}
