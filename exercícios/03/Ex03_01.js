const prompt = require('prompt-sync')();

var n= Number(prompt('Digite o número da semana: '))
switch (n) {
    case 1:
        console.log('Corresponde a domingo');
        break;
    case 2:
        console.log('Corresponde a segunda');
        break;
    case 3:
        console.log('Corresponde a terça');
        break;
    case 4:
        console.log('Corresponde a quarta');
        break;
    case 5:
        console.log('Corresponde a quinta');
        break;
    case 6:
        console.log('Corresponde a sexta');
        break;
    case 7:
        console.log('Corresponde a sábado');
        break;
    default:
        console.log('O número digitado é inválido');
        break;
}