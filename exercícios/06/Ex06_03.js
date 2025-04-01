const prompt = require('prompt-sync')();
var comidas=[]
for(let x=1;x<=6;x++){
    let comida =prompt('Digite uma comida: ')
    comidas.push(comida)
}
//Exiba apenas o primeiro o filme da lista
 console.log(comidas[0]);
//Exiba o filme da posição 4
console.log(comidas[4]);
//Substitua o filme da última posição e exiba a lista
comidas[6]=('Gente grande')
console.log(comidas);
//Insira um novo filme no final da lista e exiba a lista
comidas.push('Peppa pig')
console.log(comidas);
//Insira um novo filme na posição 5 e exiba a lista
comidas.splice(5,0,'Gente grande 2')
console.log(comidas);
//Exclua o primeiro filme e exiba a lista
comidas.shift()
console.log(comidas);
//Exclua o último filme e exiba a lista
comidas.splice(-1,1)
comidas.pop()
console.log(comidas);
//Exiba os 3 primeiros comidas da lista
console.log(comidas.slice(0,3));
//Exiba os 4 últimos comidas da lista
console.log(comidas.slice(-4));
//Exiba a quantidade de comidas atualmente na lista
console.log(comidas.length);
//Ordene os comidas em ordem decrescente e exiba-os
comidas.reverse()
console.log(comidas);