const prompt = require('prompt-sync')();
//Operações com variáveis
var Numero1= Number(prompt('Qual o primeiro número?'));
var Numero2= Number(prompt('Qual o primeiro número?'));
//Adição
var soma= Numero1 + Numero2
console.log(`A soma entre ${Numero1} e ${Numero2} é ${soma}`);
//Subtração
var subtracao= Numero1-Numero2
console.log(`A subtracao entre ${Numero1} e ${Numero2} é ${subtracao}`);
//Multiplicação
var multiplicacao= Numero1 * Numero2
console.log(`A multiplicação entre ${Numero1} e ${Numero2} é ${multiplicacao}`);
//Divisão
var divisao= Numero1/Numero2
console.log(`A divisão entre ${Numero1} e ${Numero2} é ${divisao}`);
//Exponenciação
var exponencial= Numero1**Numero2
console.log(`A exponenciação entre ${Numero1} e ${Numero2} é ${exponencial}`);

//Alterando valor variável
var preco= Number(prompt('Qual é o valor do celular?'))
var desconto= Number(prompt('Qual é o valor do desconto em %'))
preco= ((100 - desconto)*preco /100 )
console.log(`O novo preço com desconto será de ${preco}`);

//Calculando com variáveis
var numero=4/2
numero=numero**2
numero=numero*(50-20)
console.log('O valor é', numero);
console.log(`O valor é ${numero}`);

//transformando em código o diagrama
var number = Number(prompt('Qual é o número?'));
var dobro = number*2;
var metade= number/2;
console.log(`O dobro e a metade de ${number} é, respectivamente, ${dobro} e ${metade}`);

//construção de um programa
var horas= 8
var dias= 15
var cobrança= 100 
var total= (horas*dias)*cobrança
console.log(`O projeto custará ${total}`);

