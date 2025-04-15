//Escopo de variáveis 
//Variável global pode ser acessada em qualquer lugar
//Variável local pode ser acessada dentro do bloco

//utilizando variável local
function NomeEscola(){
    let escola='SESI';
    console.log(`Valor dentro da função: ${escola}`); 
}
let escola='SENAI'
console.log(`Valor fora da função: ${escola}`);
NomeEscola()
console.log(`Valor após a função: ${escola}`);


//utilizando variável global
var escola2='SENAI'
function NomeEscola2(){
    escola2='SESI';
    console.log(`Valor dentro da função: ${escola2}`); 
}

console.log(`Valor fora da função: ${escola2}`);
NomeEscola()
console.log(`Valor após a função: ${escola2}`);

// documentando funções usando o JSDoc
/**
 * 
 * @param {number} a - Primeiro número
 * @param {number} b - Segundo número
 * @returns {number} - Soma dos dois números
 */
function SOMA(a,b){
    return a+b
}
SOMA(2,4); //6

