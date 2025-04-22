const prompt = require('prompt-sync')();
let divida= Number(prompt('Qual é o valor da dívida: '))
let valor = 0
let numParcelas = Number(prompt('Quantidade de parcelas 1, 3, 6, 9 ou 12 vezes : '));
let juros = 0;
if (numParcelas==1){
    juros=((0/100)*divida)/3
    valor=(divida/numParcelas)+juros
    console.log(`O valor da parcela é R$${valor}`);
} else if (numParcelas==3){
    juros=((10/100)*divida)/3
    valor=(divida/numParcelas)+juros
    console.log(`O valor da parcela é R$${valor}`);
} else if (numParcelas==6){
    juros=((15/100)*divida)/3
    valor=(divida/numParcelas)+juros
    console.log(`O valor da parcela é R$${valor}`);
} else if (numParcelas==9){
    juros=((20/100)*divida)/3
    valor=(divida/numParcelas)+juros
    console.log(`O valor da parcela é R$${valor}`);
} else if (numParcelas==12){
    juros=((25/100)*divida)/3
    valor=(divida/numParcelas)+juros
    console.log(`O valor da parcela é R$${valor}`);
}

function juros(numeParcelas){
    
}