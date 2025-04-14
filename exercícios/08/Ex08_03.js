const prompt = require('prompt-sync')();
function FormatarData(dia,mes,ano){
    var data = `${dia}/${mes}/${ano}`
    return data
} 
console.log(FormatarData(14,7,2025));
console.log(FormatarData(7,11,2025));
console.log(FormatarData(7,11,2008));

