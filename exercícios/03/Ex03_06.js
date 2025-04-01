const prompt = require('prompt-sync')();

var s= Number(prompt('Qual o seu salário:'))
if (s<=2000) {
    d1=s*(12/100)
    console.log(`Você irá receber ${d1+s} reais`);
} else if (s>2000 && s<=4000) {
    d2=s*(10/100)
    console.log(`Você irá receber ${d2+s} reais`); 
} else if (s>4000){
    d3=s*(8/100)
    console.log(`Você irá receber ${d3+s} reais`);
}