//Importando biblioteca para receber informação do usuário
const prompt = require('prompt-sync')();

//Declaração variával sem dados (undefined)
let nota;
//Declaração variável com informação
let nome ='Carlos';

//Reatribuindo um valor à variável nome
nome='Roberto';
nota=8.5;

//Entrada de dados em nosso programa
let sobrenome = prompt('digite seu sobre nome');
let nota1 = Number(prompt('Digite a nota da 1ª prova: '));
let nota2 = Number(prompt('Digite a nota da 1ª prova: '));

//Processamento dos dados
let media= (nota1+nota2)/2;
let nomeCompleto= nome +' '+seobrenome;
let nomeCompleto2 = `${nome} ${sobrenome}`;
let idade = prompt('Digite sua idade');
let idadeNumber= parseInt(idade);

//Saída dos dados
console.log('--Relatório final--');
console.log(`O seu nome é: ${nomeCompleto} \n sua idade ${idade}`);
console.log('O seu nome é:'+ nomeCompleto+ '\n sua idade' +idade);
console.log(`Sua média é: ${media}`);

let n = 0; //0
n=n+1;     //1  
n=n+1;     //2
n=n+1;     //3
n=n+1;     //4
n+=1;      //5 operador de incremanto +=
n++;       //6 operador de incremento ++
n+=3;      //8 
n--;       //7 operador de decremento --
n=n-1;     //6
n-=2;      //4 operador de decremento -=

