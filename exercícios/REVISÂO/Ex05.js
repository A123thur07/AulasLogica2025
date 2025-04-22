const prompt = require('prompt-sync')();
let sexo= prompt('Digite o seu sexo, F para feminino e M para masculino: ')
if (sexo== 'F'){
    console.log('Seu sexo é feminino');
} else if(sexo== 'M'){
    console.log('Seu sexo é masculino');
} else{
    console.log('O sexo digitado é inválido');
}