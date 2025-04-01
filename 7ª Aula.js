const prompt = require('prompt-sync')();   
//Operadores relacionais 
// == quer dizer igual, iguldade
// != quer dizer diferente,

let a=2 
let b=3
console.log(a>b); //false
console.log(a==b); //false
console.log(a!=b); //true
console.log(a>2); //false
console.log(a>=2); //true

//if estrutura de condição muito utilizada na programação
let tenhoingresso= false
if(tenhoingresso==true){ //se a condição for verdadeira 
    //Entra nesse bloco de comando
    console.log('Posso entrar no show');
    
}

let idade= Number(prompt('Qual a sua idade?'))
if (idade>=18){
    console.log('maior de idade');
    
} else {
    console.log('menor de idade');
}
let tenhoingresso1= false
if(tenhoingresso1==true){ //se a condição for verdadeira 
    //Entra nesse bloco de comando
    console.log('Posso entrar no show');
    
} else{ //Se a primeira condição for vedadeira
    console.log('Estou barrado na portaria');
    
}


