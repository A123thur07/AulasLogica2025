const prompt = require('prompt-sync')();
let num
let impares
let pares
for(let x=1;x<=5;x++){
   num= Number(prompt('Digite o número:'))
   if(num%2==0){
    pares.push(num)
   } else{
    impares.push(num)
   }
}

console.log(`Os números pares digitados são ${pares} e ímpares são ${impares}`);
