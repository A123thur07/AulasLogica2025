//Estrutura de laço de repetição While
const prompt = require('prompt-sync')();

var resposta = 'S';

while (resposta=='S') {
    console.log('Você está dentro do bloco')
    resposta = prompt('Deseja continuar? S/N ')
}
//exemplo 2
var senhasecreta= 'SENAI'
var senhadigitada
while (senhasecreta!=senhadigitada){
    console.log('Descubra minha senha secreta!');
    senhadigitada= prompt('Qual é a senha?: ')    
}
console.log('FIM');
//exemplo 3
var contador= 1
while ( contador<=5){
    console.log(`O contador esta no nº ${contador}`);
    contador++ //contador=contador+1;
}
console.log('FIM');
//exemplo 4
//Posso deixar meu laço executando sem um condição expecífica apenas com while(true) e encerrar o loop com o comando break
var total=0
var qtde=0
while (true) {
    var valor = Number(prompt('digite o valor do produto(0 para encerrar)'))
    if(valor==0) {
        break;
    } else{
        total=valor+total;
        qtde++;
    }
}

console.log(`Você comprou no total ${qtde} produtos`);
console.log(`Valor total da compra R$ ${total.toFixed(2)}`);

