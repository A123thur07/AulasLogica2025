const prompt = require('prompt-sync')();
//Iteração sobre nossos vetores(arrays/listas)

//Vetor         0        1        2       3
let frutas = ['Maçã','Banana','Abacaxi','Uva']
for(let x = 0; x<frutas.length; x++ ){
    console.log(`A fruta da posição ${x} é ${frutas[x]}`);
}
console.log('fim');

//Iterando sobre uma lista usando o for of
let listaJogadores=['Pelé','Maradona','Messi','Ronaldo'];
for(let jogador of listaJogadores){
    console.log(`O jogador é ${jogador}`);
}

var total=0
let números=[3,9,10,6,12];
for(let n of números){
    console.log(`O número é ${n}`);
    total= total+n
} 
console.log(total);

//Verificando se um element existe em um array
let vogais1=['a','e','i','o','u']; 
var consoantes=['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'] 
var numeros=['1','2','3','4','5','6','7','8','9','0'] 
let letraParaVerificar1= prompt('Digite uma letra: ');
if(vogais1.includes(letraParaVerificar1.toLowerCase())){ //.toLowerCase transfere para minuscula
    console.log(`A letra ${letraParaVerificar1} é uma vogal`);
} else if(consoantes.includes(letraParaVerificar1.toLowerCase())){
    console.log(`A letra ${letraParaVerificar1} é uma consoante`);
}else if (numeros.includes(letraParaVerificar1)){
    console.log('Isso é um número'); 
} else{
    console.log('Isso é um caracter');
    
}

//Obtendo a posição de um item em um array usando o for of e a função entries()
// posição:        0        1          2        3 
var listaFrutas=['Maçã', 'Banana', 'Abacaxi', 'Uva'];
// O .entries me diz a posição da variável, pos mostra a posição e const cria a variável
for(const [pos,fruta] of listaFrutas.entries()){ 
console.log(`A fruta da posição ${pos} é ${fruta}`);
}

//transformando string única em lista
var produtos='Celular,Notebook.TV,Tablet,Monitor';
var listaProdutos=produtos.split(',')
console.log(produtos);
console.log(listaProdutos);

//Strings são lista(vetores/arrays) de caracteres
//          01234
let escola='SENAI';
console.log(escola[0]);
for( let e of escola ) {
    console.log(e);
}
