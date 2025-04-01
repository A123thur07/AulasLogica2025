const prompt = require('prompt-sync')();   

var a= Number(prompt('Que ano nasceu?'))
var a1= Number(prompt('Em que ano estamos?'))
var i= a1-a
if(i>=18){
    console.log('Maior de idade');    
} else {
    console.log('Menor de idade');
}