const prompt = require('prompt-sync')();
let altura= Number(prompt('Digite a sua altura: '))
let sexo = prompt('Digite o seu sexo, F para feminino e M para masculino: ')
if (sexo == 'F'){
    console.log(`O seu peso ideal é igual á ${(62.1*altura)-44.7}`);
} else if(sexo == 'M'){
    console.log(`O seu peso ideal é igual á ${(72.6*altura)-58}`);
} else{
    console.log('O sexo digitado é inválido');
}