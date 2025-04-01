const prompt = require('prompt-sync')();   

var c= Number(prompt('qual sua velocidade?'))
var v= c-80
if (v>0){
    console.log(`Você foi multado com ${v*7} reais`);
} else {
    console.log("Você não foi multado");
}