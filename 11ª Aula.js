//Estrutura de laço de repetição for
const prompt = require('prompt-sync')();
//inicialização da variável; condição do for; incremento da variável
for(let contador=1; contador<=5; contador++){
    console.log(contador);
}
//Neste for iniciamos a partir do número 5, até o nº 50
//incrementando de 3 em 3 no contador
for(let contador=5; contador<=50; contador+=3){
    console.log(`O contador é ${contador}`);
}
//utilizando o break para parar o for
for(let contador=1; contador<=500; contador++){
    console.log(contador);
    if(contador==50){
        break;
    }
}

console.log('Entregando os notebooks');
for(let nr=1;nr<=32;nr++){
    let nome= prompt(`Quem é o nº ${nr}`)
    let presente= prompt(`O(A) ${nome} está presente (S ou N)? `)
    if(presente=='S'){
        console.log(`Pegar o netebook ${nr}`);
        console.log(`Levar o notebook até o (a) ${nome}`);
    }else {
        console.log(`Não pegar o notebook ${nr}`);
    }
}
// Fazer tabuada
var nr= Number(prompt('Qual é o número?'))
for (var contador = 1; contador <= 10; contador++) {
    console.log(`${nr} X ${contador}= ${nr*contador}`);
    
    
}
