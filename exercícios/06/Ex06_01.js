const prompt = require('prompt-sync')();
var filmes=['velozes e furiosos',
'Rapunzel',
'Carros2',
'crepusculo',
'transformers',
'vingadores',
'Interstelar']
//Exiba apenas o primeiro o filme da lista
 console.log(filmes[0]);
//Exiba o filme da posição 4
console.log(filmes[4]);
//Substitua o filme da última posição e exiba a lista
filmes[6]=('Gente grande')
console.log(filmes);
//Insira um novo filme no final da lista e exiba a lista
filmes.push('Peppa pig')
console.log(filmes);
//Insira um novo filme na posição 5 e exiba a lista
filmes.splice(5,0,'Gente grande 2')
console.log(filmes);
//Exclua o primeiro filme e exiba a lista
filmes.shift()
console.log(filmes);
//Exclua o último filme e exiba a lista
filmes.splice(-1,1)
filmes.pop()
console.log(filmes);
//Exiba os 3 primeiros filmes da lista
console.log(filmes.slice(0,3));
//Exiba os 4 últimos filmes da lista
console.log(filmes.slice(-4));
//Exiba a quantidade de filmes atualmente na lista
console.log(filmes.length);
//Ordene os filmes em ordem decrescente e exiba-os
filmes.reverse()
console.log(filmes);
