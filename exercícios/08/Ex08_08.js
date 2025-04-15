function senhaaleatoria(caracteres){
   let listcaracteres='aasdfghjnbgvfdertyhjkjhgfdsertgfbnjuytrfdserfgvbhytrderfgyhj'
   var senha
  for( var x=1; x<=caracteres; x++ ) {
    senha= senha + listcaracteres[Math.floor(Math.random()* listcaracteres.length)]
}
 return senha
}

console.log(Number(prompt('Digite a quantidade de caracteres: ')));


