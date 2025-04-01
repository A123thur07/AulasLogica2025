const prompt = require('prompt-sync')();

var N= Number(prompt('Qual é o numero de início? '))
var maximo= Number(prompt('Até quanto ele vai? '))
var aumento= Number(prompt(`De quanto em quanto vai aumentar? `))
for(var f=N; f<=maximo; f+=aumento){
    console.log(`O numero é ${f}`);
    
}
