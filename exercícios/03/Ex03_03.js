const prompt = require('prompt-sync')();

var n= Number(prompt('Digite o número do mês: '))
switch (n) {
    case 1:
        console.log('Corresponde a janeiro');
        break;
    case 2:
        console.log('Corresponde a fevereiro');
        break;
    case 3:
        console.log('Corresponde a março');
        break;
    case 4:
        console.log('Corresponde a abril');
        break;
    case 5:
        console.log('Corresponde a maio');
        break;
    case 6:
        console.log('Corresponde a junho');
        break;
    case 7:
        console.log('Corresponde a julho');
        break;
    case 8:
        console.log('Corresponde a agosto');
        break;
    case 9:
        console.log('Corresponde a setembro');
        break;
    case 10:
        console.log('Corresponde a outubro');
        break;
    case 11:
        console.log('Corresponde a novembro');
        break;
    case 12:
        console.log('Corresponde a dezembro');
        break;
    default:
        console.log('O número digitado é inválido');
        break;
}