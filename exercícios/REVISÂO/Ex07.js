const prompt = require('prompt-sync')();
let dindinPorHora= Number(prompt('Digite quanto ganha por hora: '))
let horasNoMês= Number(prompt('Digite quanto trabalha no mês: '))
let salário= dindinPorHora*horasNoMês
console.log(`O seu salário bruto é igual á ${salário} `);
let IR= (11/100)*salário
let INSS= (8/100)*salário
let Sindicato= (5/100)*salário
let Descontos= IR+INSS+Sindicato
console.log(`O imposto de renda vale R$${IR}`);
console.log(`O INSS vale R$${INSS}`);
console.log(`O valor do Sindicato vale R$${Sindicato}`);
console.log(`O salarário líquido vale R$${salário-Descontos}`);



