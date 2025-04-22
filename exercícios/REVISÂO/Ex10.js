const prompt = require('prompt-sync')();
function intervalo(numi,numf){
    for(let x=numi; x<=numf;n++){
        console.log(x);
    }
}

intervalo(Number(prompt('digite o número inicial: ')),Number(prompt('digite o número final: ')))