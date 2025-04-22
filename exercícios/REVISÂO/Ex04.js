const prompt = require('prompt-sync')();
let dindinPorHora= Number(prompt('Digite quanto ganha por hora: '))
let horasNoMês= Number(prompt('Digite quanto trabalha no mês: '))
console.log(`O seu salário no mês é igual ${dindinPorHora*horasNoMês} `);
