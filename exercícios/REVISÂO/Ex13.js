const prompt = require('prompt-sync')();
function média(nota1,nota2,nota3,nota4){
    let média=(nota1+nota2+nota3+nota4)/4
    if(média>7){
        console.log('Aprovado');
    } else if(média<5){
        console.log('Reprovado');
    } else {
        console.log('Recuperação');
    }
}
média(Number(prompt('digite a nota 1: ')),Number(prompt('digite a nota 2: ')),Number(prompt('digite a nota 3: ')),Number(prompt('digite a nota 4: ')))