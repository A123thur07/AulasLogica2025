function Linha(){
    console.log('-*-*-*-*-*-*-*-*-*-');
}
//Função sem parâmetros e sem retorno
function Cabecalho(){
    Linha();
    console.log('    SESI/SENAI     ');
    Linha();
}
//Fencão com parâmetros e sem retorno
function CabecalhoEscola(nomeEscola){
    Linha();
    console.log(     nomeEscola      );
    Linha();
}

CabecalhoEscola('USP')
CabecalhoEscola('SESI')

function soma (nr1,nr2) {
    let resultado = nr1 + nr2;
    console.log(resultado);
    
}

soma(5,8)

//Função com parâmetros e retorno
function media(n1,n2){
    let resultado=(n1+n2)/2;
    return resultado; 
}
let media=media(5,8)