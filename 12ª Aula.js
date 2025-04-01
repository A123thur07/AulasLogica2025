//Variáveis compostas/vatores/arrays
//Variável simples, cabe apenas 1 dado na variável
var fruta= 'maçã'
fruta= 'banana'
//Variável composta, cabe mais de 1 dado
let frutas= ['maçã','Banana','Abacaxi','Uva']
console.log(frutas);
console.log(frutas[1]);
//declarando lista vazia
var listaVazia=[]
//declaração de uma lista de número
var numeros= [1,2,8,5,9]
//declaração de uma lista de strings
var nomes= ['Ana', "joão", 'Maria']
//declarando uma lista mista
var listamista= [4,'feijão', true, 7.55]
//declaração de uam lista com outras listas
var listadevetores= [['coca-cola','hot-dog'],[5.00,10.00]]
console.log(listadevetores= [0]);

console.log(frutas);
frutas[3]= 'melancia';
console.log(frutas);

//Inserindo um novo item na lista
frutas.push('Laranja'); // significa frutas[4]='laranja' usando o método push
frutas= [...frutas, 'Laranja'];//utilizando o spread
//Inserindo um novo item em posição específica
frutas.splice(2,0,'Morango')
console.log(frutas);
frutas.splice(3,1);//exclui item pelo indice
frutas.shift();//exclui o primeiro item 
frutas.pop();//remove o ultimo item da lista

console.log(frutas);
frutas=['Maçã','Banana','Morango','Abacaxi','Melancia','Laranja','Uva']
console.log(frutas[4]);//mostra a fruta pelo indice
console.log(frutas.slice(0,4));//mostra as frutas da posição 0 até exibir 4 itens
console.log(frutas.slice(1));//mostra as frutas da posição 1 até o último
console.log(frutas.slice(-1));//exibe os itens do fim ao início
console.log(frutas.length);//mostra o total de itens da lista
frutas.sort()//ordena a lista em ordem crescente
frutas.reverse()



