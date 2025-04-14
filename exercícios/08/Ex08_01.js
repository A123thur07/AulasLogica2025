const prompt = require('prompt-sync')();
function Saudacao(){
  var nome= prompt('Escreva o seu nome: ')
  console.log(`${nome}; tenha um bom dia`);
}
for(var x=1; x<=3; x++){
    Saudacao();
}
