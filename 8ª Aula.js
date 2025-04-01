const prompt = require('prompt-sync')();
//Estrutura condicional composta e encadeada
//operadores lógicos
// && - e
// || - ou
// !- não

let a = 2;
let b = 3;
let c = 5;
console.log(a>2 && b<2); // False por que as duas condições são  Falsas
console.log(a>1 && b<2); // False por que a 2ª condição é Falsa
console.log(a>1 && b<4); // True por que as duas condições são verdadeiras
console.log(a>1 && b<4 && c>4); // True todas são verdadeiras
console.log(a>1 && b<4 && c>5); // False a ultima é falsa

console.log(a>2 && b<2); // False por que as duas condições são  Falsas
console.log(a>1 && b<2); // False por que a 2ª condição é Falsa
console.log(a>1 && b<4); // True por que as duas condições são verdadeiras
console.log(a>1 && b<4 && c>4);

//Exercício do IMC
let altura= Number(prompt('digite sua altura:'))
let peso= Number(prompt('digite seu peso:'))
var IMC= peso/(altura**2)
if (IMC<18.5) {
    console.log('Abaixo do peso'); 
} else if(IMC>18.5 && IMC<24.9){
    console.log('Esta no peso ideal');
} else if(IMC>25 && IMC<29.9){
    console.log('Sobrepeso');
} else {
    console.log('Obesidade');
}
//Exercício de triângulo
var l1= Number(prompt('Qual é o primeiro lado?'))
var l2= Number(prompt('Qual é o segundo lado?'))
var l3= Number(prompt('Qual é o terceiro lado?'))
if(l1 == l2 && l2 == l3 && l3==l1){
    console.log('É um triângulo equilatero');
} else if(l1 != l2 && l2 != l3 && l3!=l1){
    console.log('É um triângulo escaleno');
}else {
    console.log('É um triângulo isóceles');   
}
 
var venda= Number(prompt('Quanto vendeu?'))
var horas= Number(prompt('Quanto trabalhou na semana?'))
if (venda>5000 || horas>40) {
    console.log('Recebe bônus');
} else {
    console.log('Não recebe bônus');
}

var letra= String(prompt('Qual é a letra?'))
if (letra=='a'||letra== 'e' ||letra== 'i' ||letra== 'o' ||letra== 'u') {
    console.log('É uma vogal');
} else {
    console.log('É uma consoante');
}