const prompt = require('prompt-sync')();
//Exercícios Variáveis
//1)
var nomeAluno= 'Arthur'
var Altura='1.70'
var Escola='SESI'
var AnoAtual= '2025'
console.log('Olá,',nomeAluno,'tem',Altura,'de altura e estuda na Escola',Escola,'no ano de',AnoAtual);
//2)
let nomeProfessor= prompt('Digite seu nome');
let Materia= prompt('Digite sua matéria');
let AnoIngresso= prompt('Digite o ano que ingressou');
console.log('Olá,',nomeProfessor,',auxilia na Escola',Escola,'na matéria de',Materia,'ingressou no ano de',AnoIngresso);
//3)
console.log(typeof AnoAtual, typeof AnoIngresso, typeof Altura);
AnoAtual= Number(parseInt('2025'));
AnoIngresso= Number(parseInt(prompt('Digite o ano que ingressou')));
Altura= Number(parseInt('1'));
Altura= Number(parseFloat('1.70'));
console.log(typeof AnoAtual, typeof AnoIngresso, typeof Altura);
console.log(AnoAtual,AnoIngresso,Altura);