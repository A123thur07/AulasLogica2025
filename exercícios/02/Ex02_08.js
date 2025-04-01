const prompt = require('prompt-sync')();   

var v= Number(prompt('Quanto vendeu?'))
if (v>5000){
    console.log(`Sua comissão será de ${(5/100)*5000}`);
} else {
    console.log(`Sua comissão será de ${(3/100)*5000}`);
}