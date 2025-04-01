const prompt = require('prompt-sync')();
var itotal=0
var ihomens=0
var nºdehomens=0
var imulheres=0
var nºdemulheres=0

for(var n=1;n<=10;n++){
    var i= Number(prompt("qual sua idade? "))
    var sexo= prompt("qual seu sexo (digite H para homem ou M para mulher)? ")
    if (sexo=='H') {
        ihomens+=i
        nºdehomens++;
    } else {
        imulheres+=i
        nºdemulheres++;
    }
    itotal=itotal+i
} console.log(`A idade média de homens é ${ihomens/nºdehomens}`);
  console.log(`A idade média de mulheres é ${imulheres/nºdemulheres}`);
  console.log(`A idade média total do grupo é ${itotal/(nºdemulheres+nºdehomens)}`);
  

