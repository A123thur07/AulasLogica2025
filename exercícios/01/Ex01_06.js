
const prompt = require('prompt-sync')();
//Entrada
var num= Number(prompt('Qual é o número?'));
//Processamento
var num0= num*0;
var num1= num*1;
var num2= num*2;
var num3= num*3;
var num4= num*4;
var num5= num*5;
var num6= num*6;
var num7= num*7;
var num8= num*8;
var num9= num*9;
var num10= num*10;
//Saída 
console.log(`A tabuada de ${num} é:
${num0} 
${num1}
${num2}
${num3}
${num4}
${num5}
${num6}
${num7}
${num8}
${num9}
${num10}`);
//Exemplo do prof:
console.log(`Tabuada do ${num}:
${num}x0=${num*0}
${num}x1=${num*1}
${num}x2=${num*2}
${num}x3=${num*3}
${num}x4=${num*4}
${num}x5=${num*5}
${num}x6=${num*6}
${num}x7=${num*7}
${num}x8=${num*8}
${num}x9=${num*9}
${num}x10=${num*10}`);
//aqui ele coloca direto no prompt