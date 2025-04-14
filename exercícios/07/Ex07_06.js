const prompt = require('prompt-sync')();
var palavra= prompt('Digite a palavra: ')
let vogais=['a','e','i','o','u']; 
var nrvogais=0
for(const p of palavra){
    if(vogais.includes(p.toLowerCase())){
     nrvogais++
    }
}   
console.log(`A palavra ${palavra} tem ${nrvogais} vogais`)
