const prompt = require('prompt-sync')();

//criando nossa primeira variável
//uma variável serve para armazenar uma informação/valor
//o memória crie um espaço com o nome curso e receba o valor 'Desenvolvimento de sistemas'
var curso = 'Desenvolvimento de sistemas';

//Exibindo o conteúdo da variável
console.log('curso');//Para imprimir uma variável, não se coloca entra " "
console.log(curso);//jeito correto de usar uam variável
console.log('curso', curso);

//criando e atribuindo valores a uma variável
var idade = 16; //inteira //integer
var temperatura = 24.5; //real //float
var nome = 'Arthur'; //string

console.log('Olá' + nome + 'você tem' + idade + 'anos' );
console.log(' está cursanado' + curso + 'hoje faz' + temperatura + 'ºC');

console.log('Olá' + nome + 'você tem' + idade + 'anos' );
console.log(' está cursanado' + curso + 'hoje faz' + temperatura + 'ºC');

//Template String
//utilizo a crase `` para criar uma string
//Para colocar variáveis dentro da string, utilizo $(variável)
console.log( `Olá, ${nome} você tem ${idade} anos~
    está cursando ${curso} hoje faz ${temperatura}ºC`);

//declarando uma variável lógica/boolean/bolenao(true/false)
var podedirigir = true;
var estachovendo = false;

//Declarando uma variável nula
var escola;

//exercícios
//nota1 válido
//nomeCompleto válido
//Nome Completo inválido
//Média inválido
//console inválido
//_salário válido
//9dade inválido
//Minha_Váriavel válido
//var inválido
//valor$ inválido 
//nome-completo inválido
//escola_ válido
//TELEFONE válido
//true inválido

let cidade = 'Andradina' //variável
var turma ='2º A' //variável
const ano = 2025 //constante

console.log(turma);
turma ="3ºB" // Reatrinuindo o valor de uma variável
console.log(turma);
// ano= 2026; // não podemos reatribuir valor a uma constante

var nomeCompleto = 'Arthur' // utilizando padrão camelCase
var nome_completo = 'Arthur' // padrão snake_case
var NomeCompleto = 'Arthur' // padrão PascalCase

let _nome= 'Arthur'; //string
let _idade= 16; //number
let _peso= 65.0; //number

console.log(-nome,_idade,_peso)

//Mostrando no console quais são os tipos dos dados
console.log(typeof _nome, typeof _idade, typeof _peso);

//No prompt o computador espera o usuário digitar uma informação
//Sempre quando recebemos uma informação de entrada ela vem em STRING
_nome= prompt('qual o seu nome')           //STRING
_idade= prompt('qual o sua idade')         //STRING
_peso= prompt('qual o seu peso')           //STRING
console.log('Olá',_nome,"que tem",_idade,'anos e', _peso,'quilos');

console.log(typeof _nome, typeof _idade, typeof _peso);

//criem 2 variáveis num1 e num2 que recebam as informações pelo prompt

var num1= prompt('Digite o primeiro número:');
var num2= prompt('Digite o segundo número:');
console.log(num1+num2);

console.log(typeof num1);       //string  
num1 = Number(num1);            //Convertendo variável do tipo string para number
console.log(typeof num1);       //Number  

//Receber uma informação ja convertendo seu tipo de dados
let nr1 = Number(prompt('Digite o primeiro nº'))   //Number
let nr2 = Number(prompt('Digite o primeiro nº'))   //Number
console.log(nr1+nr2);

//Convertendo os dados de uma variável 
nr1= '100.14'; //string
nr1= Number('100.14'); //convertendo string para number
nr1= parseInt('100'); //convertendo string para integer
nr1= parseFloat('100.14'); //convertendo string para float 100.00
nr1= String(100.14) //convertendo number para string

_nome= prompt('qual o seu nome'); //STRING
_idade= parseInt(prompt('qual o sua idade'));  //Convertendo a inter
_peso= parseFloat(prompt('qual o seu peso'));  //convertendo  float
console.log('Olá',_nome,"que tem",_idade,'anos e', _peso,'quilos');

