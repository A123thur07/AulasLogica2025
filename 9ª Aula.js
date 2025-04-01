//Estrutura condicional aninhadas
//Switch case
const prompt = require('prompt-sync')();

var valorCompra=120
var clienteVIP=true

if(valorCompra>=100){
    if(clienteVIP==true){
        console.log(`Você ganhou ${valorCompra*10/100}`);
    } else{
        var desconto= valorCompra*5/100
        console.log(`Você ganhou R$ ${desconto} de desconto`);
    }
} else {
    var restante=valorCompra-100
    console.log(`Compre mais R$ ${restante} e ganhe desconto`);
}


var i= Number(prompt('Quantos anos tem?'))
if (i<16) {
    console.log('Não pode votar');
} else {
    if (18<=i && i<=70) {
        console.log(`Voto Obrigatório`);
    } else if (16<=i<18 || i>70){ 
        console.log('Voto facultativo');
    }
}

var n1= Number(prompt('Digite o nº: '))
var n2= Number(prompt('Digite outro nº: '))
var op= Number(prompt('Digite o operador (+(mais) -(menos) /(dividido) *(vezes) **(exponencial)): '))
switch (op) {
    case '+':
        console.log(n1+n2);
        break;
    case '-':
        console.log(n1-n2);
        break;    
    case '/':
        console.log(n1/n2);
        break;
    case '*':
        console.log(n1*n2);
        break;
    case '**':
        console.log(n1**n2);
        break;
    default: 
         console.log('Operador iválido');
         
}