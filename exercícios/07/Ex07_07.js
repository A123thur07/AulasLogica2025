
var a='gol;corsa;palio;monza;fusca'
var listaCarros= a.split(';')                 
for(const [pos,carros] of listaCarros.entries()){
    console.log(`O carro da posição ${pos} é ${carros}`)
 }