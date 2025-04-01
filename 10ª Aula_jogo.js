const prompt = require('prompt-sync')();
console.log('========================');
console.log('🤔jogo da adivinhação🤔');
console.log('========================');

var nrsecreto= Math.floor(Math.random()* 100)+1; // opção nrsecreto= Math.floor(Math.random()* 101)
var acertou= false;
var tentativas=5
while( acertou==false ){
    var chute= Number(prompt('Digite um nº entre 1 e 100(você tem 5 tentativas): '))
    tentativas--;
    if (tentativas==0){
        console.log('Acabou as tentativas');
        break;
    }else if(chute==nrsecreto){
        console.log(`👏Acertou com ${contador} tentativas!!😎`);
        acertou=true;
    } else if( chute>nrsecreto){
        console.log(`Você chutou ${chute}, tente um número menor`);
    } else {
    console.log(`Você chutou ${chute}, tente um número maior`);
    }
}
console.log('FIM');


